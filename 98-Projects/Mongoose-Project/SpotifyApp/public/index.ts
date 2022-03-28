function handleGetSearch() {
    // const { data } = await axios.get('/get-music')
    // console.log(data);
    // const { ok, options } = data;
    // console.log({ ok, options });
}

async function handleRegistration(ev) {
    ev.preventDefault();
    let { name, password } = ev.target.elements;
    console.log(name, password)
    name = name.value;
    password = password.value;


    console.log(name, password)

    const { data } = await axios.post('/songsUser/reg-user', { name, password })
    console.log(data)
}

async function handleLogIn(ev) {
    ev.preventDefault();
    let { name, password } = ev.target.elements;

    name = name.value;
    password = password.value;

    console.log(name, password)

    const { data } = await axios.post('/songsUser/sign-user', { name, password })
    console.log(data)
}