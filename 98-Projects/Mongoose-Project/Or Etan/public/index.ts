async function handleLogin(ev) {
  ev.preventDefault();
  const email = ev.target.elements.email.value;
  const password = ev.target.elements.password.value;
  const userData = {
    email: email,
    password: password,
  };
  const data = await axios.post("/log-in", userData).then((response) => {
    const status = response.data.ok;
    const userExists = response.data.aUser;
    const verifiedUser = response.data.verifiedUser;
    const verifiedUserId = response.data.verifiedUser[0]._id;
    let html = "";
    if (status) {
      window.location.href = `/home-or.html?id=${verifiedUserId}`;
      console.log({ status: status });
      console.log(verifiedUser);
      console.log(verifiedUserId);
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
  const {data}  = await axios.post("/add-user", {
    firstName,
    lastName,
    email,
    password,
    role,
    gender
  });

  console.log(data);
}
