// import axios from "axios";

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
  try{
  const data = await axios.post("/users/log-in", userData).then((response) => {
    const status = response.data.ok;
    const userExists = response.data.aUser;
    const verifiedUser = response.data.verifiedUser;
    const verifiedUserId = verifiedUser[0]._id;


    if (!status) throw new Error("no status");
    if(status){
      window.location.href = `/home.html?id=${verifiedUserId}`;
    } else if (userExists < 0) {
      console.log("1");
    }
  });}
  catch (error) {
    console.log("error in handleLogin:");
    console.log(error.message);
    // }
  }
}

async function handleRenderUser(ev) {
  ev.preventDefault();
  let userId = ev.target.location.search.replace(/.*?id=/g, "");
  
  const { data } = await axios.get(`users/logged-in-user?userId=${userId}`);
  const { userInfo } = data;
  const user = userInfo[0];
  const name = document.querySelector("[data-name]");
  name.innerHTML = `${user.firstName} ${user.lastName}<br><span>${user.role}</span>`;
  getUsersTasks(userId)
}

async function handleRenderPage(ev) {
  const userURL = ev.target.baseURI;
  const requestedPage = ev.target.outerText.split(" ").join("");
  try {
    if (requestedPage === "home") {
      const { data } = await axios
        .post(`/users/nav`, { userURL, requestedPage })
        .then((response) => {
          const { firstName, lastName, gender, role } = response.data;

          renderHome(firstName, lastName, gender, role);
          return;
        });
      return;
    }
    if (requestedPage === "RecentlyCreated") {
      const { data } = await axios
        .post("/tasks/nav ", { userURL, requestedPage })
        .then((response) => {
          const { newURL, currentUsersTasks } = response.data;
          console.log(newURL, currentUsersTasks);
          window.location.href = newURL;

          // renderRecentlyCreated(newURL ,tasks);
        });
    }
  } catch (error) {
    console.log("error in handleRenderPage:");
    console.log(error.message);
    // }
  }
}

function renderHome(firstName, lastName, gender, role) {
  const body = document.body;
  let html = `
  <body onload="handleRenderUser(event)">
    <div id="landing">
        <div id="control">
            <div id="control__nav">
                <nav>
                    <ul>
                        <li id="home">
                            <a onclick="handleRenderPage(event)">
                                <i class="material-icons white-color">home</i>
                            </a>
                        </li>
                        <li id="chart">
                            <a onclick="handleRenderPage(ev)">
                                <i class="material-icons white-color">settings</i>
                            </a>
                        </li>
                        <li id="info">
                            <a onclick="handleRenderPage(ev)">
                                <i class="material-icons white-color">info</i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div id="landing-home">
            <div id="landing-home__logo">
            <h1 data-name>${firstName} ${lastName} <br><span>${role}</span></h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ51Gk5jjB4qD-BkcDh_fhsE4HkfnLDblQPrQLaOY13u7v5MNoBea8JzZ5NZAa0G-gAcgY&usqp=CAU"
                    alt="">
            </div>
            <div id="landing-home__search">
                <i class="material-icons">search</i>
                <input type="text" placeholder="">
            </div>


            <div id="landing-home__task">
                <h2>My Tasks</h2>
                <div class="task">
                    <div class="icon icon__1"><i class="material-icons">list_alt</i></div>
                    <p class="left">To do</p>
                    <p><span>5</span> tasks</p>
                </div>
                <div class="task">
                    <div class="icon icon__2"><i class="material-icons">drive_file_rename_outline</i></div>
                    <p class="left">In progress</p>
                    <p><span>3</span> tasks</p>

                </div>
                <div class="task">
                    <div class="icon icon__3"><i class="material-icons">check_circle_outline</i>
                    </div>
                    <p class="left">Done</p>
                    <p> <span>12</span> tasks</p>

                </div>
            </div>
            <div id="landing-home__recent">
                <div class="recent__title">
                    <h2><a onclick="handleRenderPage(event)">Recently Created</a></h2>
                    <i class="material-icons">keyboard_arrow_right</i>
                </div>


                <div id="landing__task-count">
                    <div class="box box__home1">
                        <div id="box__flex">
                            <div class="box__header">
                                <div class="box__title">
                                    <p class="box__title-text box__title-home-text">mobile app</p>
                                </div>
                            </div>
                            <div class="box__expln box__expln-home">
                                <div class="flex-date">
                                    <i class="material-icons">schedule</i>
                                    <p>2 sep</p>
                                </div>
                            </div>
                            <h4>high priority</h4>
                        </div>
                    </div>
                    <div class="box box__home2">
                        <div id="box__flex">
                            <div class="box__header">
                                <div class="box__title">
                                    <p class="box__title-text box__title-home-text">web</p>
                                </div>
                            </div>
                            <div class="box__expln box__expln-home">
                                <div class="flex-date">
                                    <i class="material-icons">schedule</i>
                                    <p>30 nov</p>
                                </div>
                            </div>
                            <h4>low priority</h4>
                        </div>
                    </div>
                    <div class="box box__home3">
                        <div id="box__flex">
                            <div class="box__header">
                                <div class="box__title">
                                    <p class="box__title-text box__title-home-text">PC</p>
                                </div>
                            </div>
                            <div class="box__expln box__expln-home">
                                <div class="flex-date">
                                    <i class="material-icons">schedule</i>
                                    <p>25 dec</p>
                                </div>
                            </div>
                            <h4>low priority</h4>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
</body>
  `;
  body.outerHTML = html;
}

async function handleRenderTasks(ev){
  const userURL = ev.target.baseURI;
  const userId = userURL.split('/')[-24];
  console.log(userId);
  
  getUsersTasks(userId)
}
console.dir();
console.log(addGlobalEventListener);

addGlobalEventListener(onload, '#landing__task-count',getUsersTasks(window.location.href), {})

async function getUsersTasks(userId) {
  try {
    const {data} = await axios.get(`tasks/getTasks?i=${userId}`);
    // const { data } = await axios
    //   .post(`/tasks/render`, { userURL })
    //   .then((response) => {
    //     const { ok, newUserURL } = response.data;
    //     console.log(ok, newUserURL);
        // let html;
        // currentUsersTasks.forEach(task => {
        //     html += `
        //     <li class="box">
        //                     <div id="box__flex">
        //                         <div class="box__header">
        //                             <div class="box__logo-square ${task.status}">
        //                                 <p class="box__logo">Bē</p>
        //                             </div>
        //                             <div class="box__title">
        //                                 <p class="box__title-text">${task.title}</p>
        //                                 <p class="box__title-urg">${task.urgency}</p>
        //                             </div>
        //                         </div>
        //                         <div class="box__expln">
        //                             <h4>${task.description}</h4>
        //                             <p class="box__expln-transp">${task.location}</p>
        //                         </div>
        //                         <div class="box__countdown">${task.date}</div>
        //                     </div>
        //                 </li>
        //                 `
        // })
      // });
  } catch (error) {
    console.log("error in getUsersTasks:");
    console.log(error.message);
    // }
  }
}








function addGlobalEventListener(
  type, selector, callback, options, parent = document){
      parent.addEventListener(type, e => {
          if (e.target.matches(selector)) callback(e)
      },
      options
      )
  }

