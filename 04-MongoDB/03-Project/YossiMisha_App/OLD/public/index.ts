function handleNotAMember(){
    const register:any = document.querySelector(".registerwrapper")
    const login:any = document.querySelector(".loginwrapper")
    register.style.display = 'block'
    login.style.display = 'none'
}
function handleAlreadyAMember(){
    const register:any = document.querySelector(".registerwrapper")
    const login:any = document.querySelector(".loginwrapper")
    register.style.display = 'none'
    login.style.display = 'block'
}


async function handleRegister(ev) {
    try {

        ev.preventDefault();

        let { username, password, confirmPassword, email, confirmEmail } = ev.target.elements

        username = username.value;
        password = password.value;
        confirmPassword = confirmPassword.value;
        email = email.value;
        confirmEmail = confirmEmail.value;

        if (password !== confirmPassword) {
            window.alert('passwords dont match')
        }
        if (email !== confirmEmail) {
            window.alert('emails dont match')
        }
        if (password === confirmPassword && email === confirmEmail) {
            const { data } = axios.post('/add-user', { username, password, email })
            return data;
        }

    }

    catch (error) {
        console.log(error);
    }
}


async function handleLogin(ev) {
    ev.preventDefault();
    let { username, password } = ev.target.elements
    username = username.value;
    password = password.value;
    const { data } = await axios.get(`/get-user?username=${username}&password=${password}`)
    console.log(data)
}
