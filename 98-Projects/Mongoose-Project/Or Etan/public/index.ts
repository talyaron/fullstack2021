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
                                      <p>${task.date}</p>
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
        task.descriptionShorted = task.description
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
                          </div>
                          <div class="box__expln">
                              <h4>${task.descriptionShorted}</h4>
                              <p class="box__expln-transp">${task.location}</p>
                          </div>
                          <div  class="box__countdown">${task.date}
                          <a onclick="handleTaskDelete(${task._id})" class="box__delete"><i class="fas fa-times"></i></a></div>
                      </div>
                  </li>`;
    });

    const nextTask = getNextTask(currentUsersTasks)

    tasksRoot.innerHTML = html;

    formHtml = `
   <div class="task-title">
                        <input type="text" name="title" id="title" value="${nextTask.title}">
                    </div>
                    <div class="task-urg">
                        <select type="text" name="urg" id="urg" value="${nextTask.urgency}">
                        <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                        
                    </div>
                    <div class="task-description">
                        <input type="text" name="description" id="description" value="${nextTask.description}">
                    </div>
                    <div class="task-location">
                        <input type="text" name='owner' id='owner' value="${nextTask.location}">
                    </div>
                    <div class="task-time">
                        <input type="date" name="date" id="date" value="${nextTask.year}-${nextTask.month}-${nextTask.day}">
                    </div>`;
nextRoot.innerHTML = formHtml;
    return;
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
    const month = ("0" + (new Date(task.date).getMonth() + 1)).slice(-2)
    const day = ("0" + (new Date(task.date).getMonth() + 1)).slice(-2);


    
    
    task.year = year;
    task.month = month;
    task.day = day;
    task.date = new Date(task.date).toLocaleDateString().split(",")[0];
  });
  tasks.sort((a, b) => a.day - b.day);
  tasks.sort((a, b) => a.month - b.month);
  tasks.sort((a, b) => a.year - b.year);
}

function getNextTask(currentUsersTasks){
  const thisYear = new Date().getFullYear();
  const thisMonth = new Date().getMonth();
  const thisDay = new Date().getDate();
  let nextTask = currentUsersTasks.filter(task => task.year >= thisYear && task.month >= thisMonth && task.day >= thisDay)[0]
  return nextTask
}

async function handleNewTask(ev) {
  ev.preventDefault();
  const userId = ev.target.baseURI.slice(-24);
  let { color, title, description, urgency, location, date } =
    ev.target.elements;
      color = color.value,
      title = title.value,
      description = description.value,
      urgency = urgency.value,
      location = location.value,
      date = date.value,
  await axios.post('/tasks/new-task', {color, title, description, urgency, location, date, userId}).then((response) => {
    const {currentUsersTasks} = response.data
  renderTasks(currentUsersTasks, 'RecentlyCreated')
})}


async function handleTaskDelete(id){
  console.log(id);
  
  
}