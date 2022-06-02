async function handleLogUp(event) {

    event.preventDefault()

    try {

        let { userName, email, password } = event.target.elements;
        userName = userName.value; email = email.value; password = password.value;

        if (!userName || !email || !password) throw new Error("no userName, email, password in handleLogUp");

        const { data } = await axios.post('/pool/swimers', { userName, email, password })
        console.log(data);


    } catch (error) {

        console.error(error.message);

    }

    event.target.reset()

}

async function handleLogin(ev) {
    ev.preventDefault();

    try {

        let { userName, password } = ev.target.elements;
        userName = userName.value; password = password.value;

        if (!userName || !password) throw new Error("no userName or password in handleLogin");

        const { data } = await axios.post("/pool/login", { userName, password });
        console.log(data);

        if (data.ok) {

            window.location.href = "home.html";

        }

    } catch (error) {

        console.error(error.message);

    }

}


async function getSwimers(e) {

    e.preventDefault()

    let { userName, password } = e.target.elements;
    userName = userName.value; password = password.value;

    if (!userName || !password) throw new Error("no userName or password in handleLogin");

    const { data } = await axios.post("/pool/get-all-swimers", { userName, password });
    console.log(data);

}

