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
    const verifiedUser = response.data.verifiedUser[0];
    const verifiedUserId = verifiedUser._id;
    console.log(verifiedUserId);
    
    // let html = "";
    if (status) {
      const name = document.querySelector('[data-name]')
      console.log(verifiedUser);
      renderUser(verifiedUser)
    } else if (userExists) {
      console.log({ userExists: userExists });

      // document.get
    }
  });
}

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

function renderUser(user){
  const verifiedUserId = user._id;
  window.location.href = `/home-or.html?id=${verifiedUserId}`; 
 console.log(user);

}