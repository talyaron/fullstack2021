

 async function handleRegister(ev) {
  ev.preventDefault();
  let { firstName, lastName, email, password, role , gender} = ev.target.elements;
  firstName = firstName.value;
  lastName = lastName.value;
  email = email.value;
  password = password.value;
  role = role.value;
  gender = gender.value
  const {data}  = await axios.post("/users/add-user", {
    firstName,
    lastName,
    email,
    password,
    role,
    gender
  });

  console.log(data);
  window.location.href = `/`
}

async function handleLogin(ev) {
  ev.preventDefault();
  const email = ev.target.elements.email.value;
  const password = ev.target.elements.password.value;
  const userData = {
    email: email,
    password: password,
  };
  const data = await axios.post("/users/log-in", userData).then((response) => {
    const status = response.data.ok;
    const userExists = response.data.aUser;
    const verifiedUser = response.data.verifiedUser;
    const verifiedUserId = verifiedUser[0]._id;

    

    if (status) {

      window.location.href = `/home-or.html?id=${verifiedUserId}`; 
    } else if (userExists) {
      console.log({ userExists: userExists });
      

    }
  });
}

async function handleRenderUser(ev){
  ev.preventDefault();
  let userId = ev.target.location.search.replace(/.*?id=/g,"");
  const {data} = await axios.get(`users/logged-in-user?userId=${userId}`);
  
  const {userInfo} = data;
  const user = userInfo[0]
  const name = document.querySelector('[data-name]')
  name.innerHTML = `${user.firstName} ${user.lastName}<br><span>${user.role}</span>`
  
  
  
  
}