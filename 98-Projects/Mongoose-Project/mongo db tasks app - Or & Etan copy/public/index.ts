async function handleRegister(ev) {
  ev.preventDefault();
  const registerStatus = document.querySelector('[data-register-status]');
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
  const {aUser} = data;
  if(aUser){
    registerStatus.innerHTML = `<h2>hello ${aUser.firstName}, you seem to already have an account under that email!<h2> <a href="/">Log in here</a>`
    return;
  }
  window.location.href = `/`;

}

async function handleLogin(ev) {
  ev.preventDefault();
  const passwordStatus = document.querySelector('[data-password-status]')
  const email = ev.target.elements.email.value;
  const password = ev.target.elements.password.value;
  const userData = {
    email: email,
    password: password,
  };
  try {
    const {data} = await axios
      .post("/users/log-in", userData)

        const {ok, aUser, verifiedUser, userId} = data;


        const verifiedUserId = userId;

        passwordStatus.style.color = ''
        passwordStatus.innerHTML = ''
        if(aUser) {

          passwordStatus.style.color = 'red'
          passwordStatus.innerHTML = `<h1>*Wrong password!</h1>`;
          
        }
        if(!aUser && !ok){

          
          passwordStatus.innerHTML = `<h2>This email doesn't seem to exist in out database, Try again, or register bellow:</h2>`
          return;
        }
        if (!ok) throw new Error("no ok");
        if (ok) {

          window.location.href = `/home.html?id=${verifiedUserId}`;
        } 
          
          return
        }
      
   catch (error) {
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
  const { userInfo, decoded } = data;

  
  getUsersTasks(userId, currentPage);
  const user = userInfo[0];
  const name = document.querySelector("[data-name]");
  const gender = document.querySelector("[data-gender]");
  name.innerHTML = `${user.firstName} ${user.lastName}<br><span>${user.role}</span>`;
  if (user.gender === `male`) {
    gender.src = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51Gk5jjB4qD-BkcDh_fhsE4HkfnLDblQPrQLaOY13u7v5MNoBea8JzZ5NZAa0G-gAcgY&usqp=CAU`;
  } else {
    gender.src = `https://static.vecteezy.com/system/resources/thumbnails/002/586/938/small/woman-cartoon-character-portrait-brunette-female-round-line-icon-free-vector.jpg`;
  }

  const lowTasks = document.querySelector("[data-low]");
  const mediumTasks = document.querySelector("[data-medium]");
  const highTasks = document.querySelector("[data-high]");

  const arr = await Promise.all([handleGetUrgencies(userId)]);
  const low = arr[0][0];

  lowTasks.innerHTML = low.length;
  const medium = arr[0][1];

  mediumTasks.innerHTML = medium.length;
  const high = arr[0][2];

  highTasks.innerHTML = high.length;
}

async function handleGetUrgencies(userId) {
  const { data } = await axios.get(`tasks/get-urgencies?userId=${userId}`);

  const { lowUrgency, mediumUrgency, highUrgency } = data;
  let arr = [lowUrgency, mediumUrgency, highUrgency];

  return arr;
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
  const settingsForm = document.querySelector("[data-settings]");

  const { data } = await axios.get(`users/logged-in-user?userId=${userId}`);
  const { userInfo } = data;
  let html = "";
  const user = userInfo[0];
  html = `<form name="userUpdate" id="userUpdate" onsubmit="handleUserUpdate(event)">
  <h1>Update Your information</h1>
  
  <fieldset form="userUpdate">
  <legend>Personal Settings</legend>
  <lable>First Name:</lable>
  <input type="text" name="firstNameUpdate" value="${user.firstName}" placeholder="${user.firstName}">
  <br>
  <lable>Last Name:</lable>
  <input type="text" name="lastNameUpdate" value="${user.lastName}" placeholder="${user.lastName}">
  </fieldset>
  <fieldset form="userUpdate">
  <legend>Account Settings</legend>
  <lable>Email:</lable>
  <input type="email" name="emailUpdate" value="${user.email}" placeholder="${user.email}">
  <br>
  <lable>Gender:</lable>
  <select name="genderUpdate" id="genderUpdate"> 
  <option selected disabled value="${user.gender}">${user.gender}</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  </select>
  <br>
  <lable>Role:</lable>
  <input type="text" name="roleUpdate" value="${user.role}" placeholder="${user.role}">
  <br>
  <lable>Password:</lable>
  <input type="password" name="passwordUpdate" value="" placeholder="Enter new password">
  
  </fieldset>
  <fieldset form="userUpdate">
  <legend>Password Confirmation</legend>
  <h4>to save any of your settings changes, Enter your pass&shy;word bellow:</h4>
  <input type="password" name="passwordConfirmation" placeholder="your current/old password">
  <input type="submit" value="update info!">
  </fieldset>
  <h6 data-password-status></h6>
  </form>`;
  settingsForm.innerHTML = html;
}

async function handleUserUpdate(ev) {
  ev.preventDefault();
  try {
    const userId = ev.target.baseURI.slice(-24);
    const passwordStatus = document.querySelector("[data-password-status]");
    const firstNameUpdate = ev.target.elements.firstNameUpdate?.value;
    const lastNameUpdate = ev.target.elements.lastNameUpdate?.value;
    const emailUpdate = ev.target.elements.emailUpdate?.value;
    const genderUpdate = ev.target.elements.genderUpdate?.value;
    const roleUpdate = ev.target.elements.roleUpdate?.value;
    const passwordUpdate = ev.target.elements.passwordUpdate?.value;
    const passwordConfirmation = ev.target.elements.passwordConfirmation?.value;
    // const isRightPassword = await handlePasswordCheck(passwordConfirmation, userId)
    // if(isRightPassword){

    const { data } = axios
      .patch(`/users/settings`, {
        firstNameUpdate,
        lastNameUpdate,
        emailUpdate,
        genderUpdate,
        roleUpdate,
        passwordUpdate,
        passwordConfirmation,
        userId,
      })
      .then((data) => {
        const {updatedUser, updateStatus} = data.data;
        passwordStatus.style.color = ``;
        if(updatedUser === undefined) {
          passwordStatus.style.color = 'red';
          passwordStatus.innerHTML = `*You Either put in the wrong password or no password at all, TRY AGAIN!`
          return
        }
        if(updateStatus === undefined){
          passwordStatus.innerHTML = `<h2>Your Inxrformation was updated successfully</h2>`;
        }

      });
    // const {updatedUser} = data;



    // }else{
    // }
  } catch (error) {
    console.log(error);
    console.log({ error: error.message });
  }
}
async function handlePasswordCheck(password, userId) {
  const { data } = await axios.post(`/users/passwordCheck`, {
    password,
    userId,
  });
  const { isRightPassword } = data;
  if (isRightPassword.length > 0) {
    return true;
  } else return false;
}
async function handlePageChange(ev) {
  const userURL = ev.target.baseURI;

  const requestedPage = ev.target.outerText.split(" ").join("");


  try {
    if (requestedPage === "home") {
      const { data } = await axios
        .post(`/users/nav`, { userURL, requestedPage })
        .then((response) => {
          const { newURL } = response.data;
          window.location.href = newURL;
        });
    }
    if (requestedPage === "settings") {
      const { data } = await axios.post(`/users/nav`, {
        userURL,
        requestedPage,
      });
      const { newURL } = data;


      window.location.href = newURL;
    }
    if (requestedPage === "info") {
      const { data } = await axios.post(`/users/nav`, {
        userURL,
        requestedPage,
      });
      const { newURL } = data;
      window.location.href = newURL;
    }
    if (requestedPage === "RecentlyCreated") {

      
      const { data } = await axios.post(`/users/nav`, {
        userURL,
        requestedPage,
      })
      .then((response) => {
        
        const { newURL } = response.data;
        window.location.href = newURL;

      })
    }
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
  try {
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
          task.descriptionShorted = task.description;
        }
        if (!task.checked) {
          html += `
     <li class="box">
                      <div id="box__flex">
                          <div class="box__header">
                              <div class="box__logo-square ${task.urgency}">
                                  <p style="color: ${task.color}" class="box__logo">Bē</p>
                              </div>
                              <div  class="box__title">
                                  <p style="color: ${task.color}" class="box__title-text">${task.title}</p>
                                  <p class="box__title-urg">${task.urgency}</p>
                              </div>

                              <i data-id="${task._id}" onclick="renderTaskModal(event)" class="fas fa-edit"></i>

                          </div>
                          <div class="box__expln">
                              <h4>${task.descriptionShorted}</h4>
                              <p class="box__expln-transp">${task.location}</p>
                          </div>
                          <div  class="box__countdown">${task.date}
                          <a class="fas fa-check" data-check="${task._id}" onclick="handleTaskCheck(event)"></a>
                          </div>
                          <a onclick="handleTaskDelete(event)" class="box__delete">
                          <i data-delete="${task._id}" class="fas fa-trash-alt"></i>
                          </a></div>
                      </div>

                  </li>`;
          return;
        }
        html += `
        <li class="box">
        <del>
                      <div id="box__flex">
                          <div class="box__header">
                              <div class="box__logo-square ${task.urgency}">
                                  <p style="color: ${task.color}" class="box__logo">Bē</p>
                              </div>
                              <div  class="box__title">
                                  <p style="color: ${task.color}" class="box__title-text">${task.title}</p>
                                  <p class="box__title-urg">${task.urgency}</p>
                              </div>

                              <i data-id="${task._id}" onclick="renderTaskModal(event)" class="fas fa-edit"></i>

                          </div>
                          <div class="box__expln">
                              <h4>${task.descriptionShorted}</h4>
                              <p class="box__expln-transp">${task.location}</p>
                          </div>
                          <div  class="box__countdown">${task.date}
                          <a class="fas fa-check" data-check="${task._id}" onclick="handleTaskCheck(event)"></a>
                          </div>
                          <a onclick="handleTaskDelete(event)" class="box__delete">
                          <i data-delete="${task._id}" class="fas fa-trash-alt"></i>
                          </a></div>
                      </div>
                      </del>
                  </li>`;
      });

      const nextTask = getNextTask(currentUsersTasks);

      tasksRoot.innerHTML = html;

      if (nextTask) {
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
}
if (!nextTask) {
  formHtml = `<h1> You are all caught up! </h1>`;
}
const formField = nextRoot.parentElement;
formField.style.background = nextTask.color;

nextRoot.innerHTML = formHtml;
return;
}
} catch (error) {
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
    const day = ("0" + (new Date(task.date).getDate() + 1)).slice(-2);
    const stringDate = `${year}-${month}-${day}`;

    task.year = year;
    task.month = month;
    task.day = day;
    task.date = new Date(task.date).toLocaleDateString().replace(/\//g, "-");
    task.date = stringDate;
  });
  tasks.sort((a, b) => a.day - b.day);
  tasks.sort((a, b) => a.month - b.month);
  tasks.sort((a, b) => a.year - b.year);
}

function getNextTask(currentUsersTasks) {
  const thisYear = new Date().getFullYear();
  const thisMonth = new Date().getMonth() + 1;
  const thisDay = new Date().getDate();

  const nextTasks = currentUsersTasks.filter((task) => {
    if (!task.checked) {
      if (task.year > thisYear) {
        return task;
      } else if ((task.year = this)) {
        if (task.month > thisMonth) {
          return task;
        } else if ((task.month = thisMonth)) {
          if (task.day > thisDay) {
            return task;
          }
        }
      }
    }
  });
  const nextTask = nextTasks[0];

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
  try {
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
    const { currentUsersTasks } = data;
    renderTasks(currentUsersTasks, "RecentlyCreated");
    closeTaskModal();
  } catch (error) {
    console.log("error in handleTaskUpdate");
    console.log({ error: error.message });
  }
}

async function handleTaskCheck(ev) {
  try {
    const timeChecked = new Date().toLocaleDateString().replace(/\//g, "-");
    const taskId = ev.target.dataset.check;

    
    const userId = ev.target.baseURI.slice(-24);
    const { data } = await axios.patch("/tasks/check-task", {
      _id: taskId,
      ownerId: userId,
      timeChecked,
    });
    const { currentUsersTasks } = data;

    
    renderTasks(currentUsersTasks, "RecentlyCreated");
  } catch (error) {
    console.log("error in handleTaskCheck");
    console.log({ error: error.message });
  }
}

async function handleTaskDelete(ev) {
  const taskId = ev.target.dataset.delete;
  const userURL = ev.target.baseURI;

  try {
    const { data } = await axios.delete("/tasks/delete-task", {
      data: { taskId, userURL },
    });
    const { currentUsersTasks, currentPage } = data;
    renderTasks(currentUsersTasks, currentPage);
  } catch (error) {
    console.log("error in handleTaskDelete");
    console.log({ error: error.message });
  }
}

async function handleColor(ev) {
  const newColor = ev.target.value;
  const formField = document.querySelector("#landing__task-next");
  formField.style.backgroundColor = newColor;
}

// task update modal:

async function openTaskModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}
function closeTaskModal() {
  const modal = document.querySelector(".taskModal");
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

async function renderTaskModal(ev) {
  const taskId = ev.target.dataset.id;
  const modal = document.querySelector(".taskModal");

  // const overlay = document.querySelector("[data-taskModal-overlay]");
  let html = "";
  try {
    const { data } = await axios.post("/tasks/task", { taskId: taskId });
    const currentTask = data;
    if (!currentTask) throw new Error("no task in the modal");
    currentTask.date = currentTask.date.slice(0, 10);
    html += `
<div class="taskModal-header">
<h1>${currentTask.title}</h1>
<button onclick="closeTaskModal()" class="taskModal-closeButton"> &times; </button>
</div>
<form onsubmit="handleTaskUpdate(event)" class="taskModal-form">
<fieldset>
<legend>Task title</legend>
<div  class="taskModal-title">
<label for="title">Task title:</label>
<input type="text" name="title" id="title" value="${currentTask.title}">
<label for="color">Task title color:</label>
<input onchange="handleColor(event)" type="color" name="color" id="color" value="${currentTask.color}">
</fieldset>
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
<div onclick="closeTaskModal()" data-taskModal-overlay class="overlay"></div>`;
    modal.innerHTML = html;
    openTaskModal(modal);
  } catch (error) {
    console.log(error.message);
    console.log(error);
  }
}
