

async function handleRegister(ev) {
  ev.preventDefault();
  let { firstName, lastName, email, password, role, gender } =
    ev.target.elements;
  firstName = firstName.value;
  lastName = lastName.value;
  email = email.value;
  password = password.value;
  role = role.value;
  gender = gender.value;
  const { data } = await axios.post("/users/add-user", {
    firstName,
    lastName,
    email,
    password,
    role,
    gender,
  });
  window.location.href = `/`;
}

async function handleLogin(ev) {
  ev.preventDefault();
  const email = ev.target.elements.email.value;
  const password = ev.target.elements.password.value;
  const userData = {
    email: email,
    password: password,
  };
  try {
    const data = await axios
      .post("/users/log-in", userData)
      .then((response) => {
        const status = response.data.ok;
        const userExists = response.data.aUser;
        const verifiedUser = response.data.verifiedUser;
        const verifiedUserId = verifiedUser[0]._id;

        if (!status) throw new Error("no status");
        if (status) {
          window.location.href = `/home.html?id=${verifiedUserId}`;
        } else if (userExists < 0) {
        }
      });
  } catch (error) {
    console.log("error in handleLogin:");
    console.log(error.message);
    // }
  }
}

async function handleRenderHome(ev) {
  ev.preventDefault();
  const currentPage = ev.target.title;

  let userId = ev.target.location.search.replace(/.*?id=/g, "");
  const { data } = await axios.get(`users/logged-in-user?userId=${userId}`);
  const { userInfo } = data;
  getUsersTasks(userId, currentPage);
  const user = userInfo[0];
  const name = document.querySelector("[data-name]");
  name.innerHTML = `${user.firstName} ${user.lastName}<br><span>${user.role}</span>`;
  const lowTasks = document.querySelector("[data-low]");
  const mediumTasks = document.querySelector("[data-medium]");
  const highTasks = document.querySelector("[data-high]");
}

async function handleRenderRecentlyCreated(ev) {
  ev.preventDefault();
  const currentPage = ev.target.title.split(" ").join("");
  let userId = ev.target.location.search.replace(/.*?id=/g, "");
  const { data } = await axios.get(`users/logged-in-user?userId=${userId}`);
  getUsersTasks(userId, currentPage);
}

async function handleRenderSettings(ev) {
  ev.preventDefault();
  const currentPage = ev.target.title;
  let userId = ev.target.location.search.replace(/.*?id=/g, "");

  const { data } = await axios.get(`users/logged-in-user?userId=${userId}`);
  const { userInfo } = data;
  const user = userInfo[0];
}

async function handlePageChange(ev) {
  const userURL = ev.target.baseURI;

  const requestedPage = ev.target.outerText.split(" ").join("");

  try {
    const { data } = await axios
      .post(`/users/nav`, { userURL, requestedPage })
      .then((response) => {
        const { newURL } = response.data;
        window.location.href = newURL;
      });
  } catch (error) {
    console.log("error in handleRenderPage:");
    console.log(error.message);
    // }
  }
}

async function getUsersTasks(userId, currentPage) {
  try {
    const { data } = await axios.get(`tasks/getTasks?ownerId=${userId}`);
    const currentUsersTasks = data;
    renderTasks(currentUsersTasks, currentPage);
  } catch (error) {
    console.log("error in getUsersTasks:");
    console.log(error.message);
    // }
  }
}
async function renderTasks(currentUsersTasks, currentPage) {
  sortTasksByDate(currentUsersTasks);

  let html = "";
  let formHtml = "";
  try{
  if (currentPage === "Home") {
    const tasksRoot = document.querySelector("[data-box-root]");
    const tasksCount = document.querySelector("[data-task-count]");
    currentUsersTasks.forEach((task) => {
      html += `
    <div class="box ${task.urgency}">
                          <div id="box__flex">
                              <div class="box__header">
                                  <div class="box__title">
                                      <p class="box__title-text box__title-home-text">${task.title}</p>
                                  </div>
                              </div>
                              <div class="box__expln box__expln-home">
                                  <div class="flex-date">
                                      <i class="material-icons">schedule</i>
                                      <p>${`task.date`}</p>
                                  </div>
                              </div>
                              <h4>${task.urgency} priority</h4>
                          </div>
                      </div>`;
    });
    tasksRoot.innerHTML = html;
    return;
  }
  if (currentPage === "RecentlyCreated") {
    const counterRoot = document.querySelector("[data-counter]");
    counterRoot.innerHTML = currentUsersTasks.length;
    const tasksRoot = document.querySelector("[data-box-root]");
    const nextRoot = document.querySelector("[data-next-root]");
    currentUsersTasks.forEach((task) => {
      if (task.description.length > 20) {
        task.descriptionShorted = task.description.substring(0, 15) + "...";
      } else {
        task.descriptionShorted = task.description;
      }

      html += `
     <li class="box">
                      <div id="box__flex">
                          <div class="box__header">
                              <div class="box__logo-square ${task.urgency}">
                                  <p class="box__logo">Bē</p>
                              </div>
                              <div  class="box__title">
                                  <p class="box__title-text">${task.title}</p>
                                  <p class="box__title-urg">${task.urgency}</p>
                              </div>

                              <i data-id="${task._id}" onclick="renderTaskModal(event)" class="fas fa-edit"></i>

                          </div>
                          <div class="box__expln">
                              <h4>${task.descriptionShorted}</h4>
                              <p class="box__expln-transp">${task.location}</p>
                          </div>
                          <div  class="box__countdown">${task.date}</div>
                          <a onclick="handleTaskDelete(event)" class="box__delete">
                          <i data-delete="${task._id}" class="fas fa-trash-alt"></i>
                          </a></div>
                      </div>

                  </li>`;
    });


    const nextTask = getNextTask(currentUsersTasks);
tasksRoot.innerHTML = html;

    formHtml = `
    <input onchange="handleColor(event)" type="color" name="color" id="color" value="${nextTask.color}">
                        <div  class="task-title">
                            <input type="text" name="title" id="title" value="${nextTask.title}">
                        </div>
                        <div class="task-urg">
                            <select type="text" name="urgency" id="urg">
                            <option selected disabled value="${nextTask.urgency}">${nextTask.urgency}</option>
                            <option value="high">High</option>
                                <option value="medium">Medium</option>
                                <option value="low">Low</option>
                            </select>
                            
                        </div>
                        <div class="task-description">
                            <input type="text" name="description" id="description" value="${nextTask.description}">
                        </div>
                        <div class="task-location">
                            <input type="text" name='location' id='owner' value="${nextTask.location}">
                        </div>
                        <div class="task-time">
                            <input type="date" name="date" id="date" value="${nextTask.date}">
                        </div>
                        <input data-id="${nextTask._id}" type="submit" name="submit" id="submit" value="Update this task">
`;
    const formField = nextRoot.parentElement;
    formField.style.background = nextTask.color;



    nextRoot.innerHTML = formHtml;
    return;
  }
}catch(error){
  console.log(error);
  console.error(error.message);
}
}


function addGlobalEventListener(
  type,
  selector,
  callback,
  options,
  parent = document
) {
  parent.addEventListener(
    type,
    (e) => {
      if (e.target.matches(selector)) callback(e);
    },
    options
  );
}

function sortTasksByDate(tasks) {
  tasks.forEach((task) => {
    const year = new Date(task.date).getFullYear();
    const month = ("0" + (new Date(task.date).getMonth() + 1)).slice(-2);
    const day = ("0" + (new Date(task.date).getDate()+1)).slice(-2);
const stringDate = `${year}-${month}-${day}`

    task.year = year;
    task.month = month;
    task.day = day;
    task.date = new Date(task.date).toLocaleDateString().replace(/\//g, '-');
task.date = stringDate;
    

  });
  tasks.sort((a, b) => a.day - b.day);
  tasks.sort((a, b) => a.month - b.month);
  tasks.sort((a, b) => a.year - b.year);
}

function getNextTask(currentUsersTasks) {
  const thisYear = new Date().getFullYear();
  const thisMonth = new Date().getMonth()+1;
  const thisDay = new Date().getDate();


  
  const nextTasks = currentUsersTasks.filter(
    (task) =>{    
      if(task.year > thisYear){
        return task
      } else if(task.year = this ){
        if(task.month > thisMonth){
          return task
        }else if (task.month = thisMonth){
          if(task.day > thisDay){
            return task
          }
        }
      }
    }
  );
  const nextTask = nextTasks[0]

  
  return nextTask;
}

async function handleNewTask(ev) {
  ev.preventDefault();
  const userId = ev.target.baseURI.slice(-24);
  let { color, title, description, urgency, location, date } =
    ev.target.elements;
  (color = color.value),
    (title = title.value),
    (description = description.value),
    (urgency = urgency.value),
    (location = location.value),
    (date = date.value),
    await axios
      .post("/tasks/add-new-task", {
        color,
        title,
        description,
        urgency,
        location,
        date,
        userId,
      })
      .then((response) => {
        const { currentUsersTasks } = response.data;
        renderTasks(currentUsersTasks, "RecentlyCreated");
      });
}

async function handleTaskUpdate(ev) {
  ev.preventDefault();
  const color = ev.target.elements.color.value;
  const title = ev.target.elements.title.value;
  const urgency = ev.target.elements.urgency.value;
  const description = ev.target.elements.description.value;
  const location = ev.target.elements.location.value;
  const date = ev.target.elements.date.value;
  const taskId = ev.target.elements.submit.dataset.id;
  const userId = ev.target.baseURI.split("=")[1];
try{
  const { data } = await axios.patch("/tasks/updated-task", {
    _id: taskId,
    ownerId: userId,
    color,
    title,
    urgency,
    description,
    location,
    date,
  });
  const {currentUsersTasks } = data;
  renderTasks(currentUsersTasks, "RecentlyCreated");
  closeTaskModal()
}catch (error) {
  console.log('error in handleTaskUpdate')
  console.log({error: error.message})

}

}
async function handleTaskDelete(ev) {
const taskId = ev.target.dataset.delete
const userURL = ev.target.baseURI;
try{
  const { data } = await axios.delete('/tasks/delete-task', {data:{taskId, userURL}})
const {currentUsersTasks, currentPage} = data;
renderTasks(currentUsersTasks, currentPage)
}catch (error) {
  console.log('error in handleTaskUpdate')
  console.log({error: error.message})
}
}

async function handleColor(ev) {
  const newColor = ev.target.value;
  const formField = document.querySelector("#landing__task-next");
  formField.style.backgroundColor = newColor;
}


// task update modal:

async function openTaskModal(modal) {
  if(modal == null) return 
  modal.classList.add('active')
  overlay.classList.add('active')
}
function closeTaskModal(){
  const modal = document.querySelector('.taskModal')
  if(modal == null) return 
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

async function renderTaskModal(ev){
  const taskId = ev.target.dataset.id;
  const modal = document.querySelector('.taskModal');

  const overlay = document.querySelector('[data-taskModal-overlay]')
  let html ='';
  try {
    const {data} = await axios.post('/tasks/task', {taskId:taskId})
    const currentTask = data;
    if(!currentTask) throw new Error("no task in the modal")
currentTask.date = currentTask.date.slice(0,10)
html += `
<div class="taskModal-header">
<h1>${currentTask.title}</h1>
<button onclick="closeTaskModal()" class="taskModal-closeButton"> &times; </button>
</div>
<form onsubmit="handleTaskUpdate(event)" class="taskModal-form">
<input onchange="handleColor(event)" type="color" name="color" id="color" value="${currentTask.color}">
<div  class="taskModal-title">
<input type="text" name="title" id="title" value="${currentTask.title}">

</div>
<div class="taskModal-urgency">
<select type="text" name="urgency" id="urg">
<option selected disabled value="${currentTask.urgency}">${currentTask.urgency}</option>
<option value="high">High</option>
<option value="medium">Medium</option>
<option value="low">Low</option>
</select>

</div>
<div class="taskModal-description">
<input type="text" name="description" id="description" value="${currentTask.description}">
</div>
<div class="taskModal-location">
<input type="text" name='location' id='owner' value="${currentTask.location}">
</div>
<div class="taskModal-date">
<input type="date" name="date" id="date" value="${currentTask.date}">
</div>
<input data-id="${currentTask._id}" type="submit" name="submit" id="submit" value="Update this task">
</form>
<div onclick="closeTaskModal()" data-taskModal-overlay class="overlay"></div>`
modal.innerHTML = html;
openTaskModal(modal)


} catch (error) {
  console.log(error.message);
  console.log(error)
}
}