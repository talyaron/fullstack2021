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
          console.log("1");
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
  let userId = ev.target.location.search.replace(/.*?id=/g, "");

  const { data } = await axios.get(`users/logged-in-user?userId=${userId}`);
  const { userInfo } = data;
  const user = userInfo[0];
  const name = document.querySelector("[data-name]");
  name.innerHTML = `${user.firstName} ${user.lastName}<br><span>${user.role}</span>`;
  const lowTasks = document.querySelector("[data-low]");
  const mediumTasks = document.querySelector("[data-medium]");
  const highTasks = document.querySelector("[data-high]");
  getUsersTasks(userId);
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

async function handleGetUsersTasks(ev) {
  const userURL = ev.target.baseURI;

  const userId = userURL.split("/")[1];
  getUsersTasks(userId);
}
// addGlobalEventListener(onload, '#landing__task-count',getUsersTasks(window.location.href), {})

async function getUsersTasks(userId) {
  try {
    const { data } = await axios.get(`tasks/getTasks?ownerId=${userId}`);
    const currentUsersTasks = data;
    renderTasks(currentUsersTasks);
  } catch (error) {
    console.log("error in getUsersTasks:");
    console.log(error.message);
    // }
  }
}
async function renderTasks(currentUsersTasks) {
  console.log(currentUsersTasks);
  let html = "";
  const tasksBoxes = document.querySelector("[data-box-root]")
  const tasksCount = document.querySelector("[data-task-count]")
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
  tasksBoxes.innerHTML = html
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
