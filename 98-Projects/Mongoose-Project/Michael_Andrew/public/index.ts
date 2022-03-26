async function OpenSIgnUpForm(e) {

    e.preventDefault()

    try {

        const newUser = e.target.elements
        let { userName, email, password, password2, url } = newUser;
        //andrew - i added split and join because- maybe the user will space in between his email. So i erase spaces. You will se in the server - i'm using the email to figure if he is already registered
        userName = userName.value.split(' ').join(''); email = email.value.split(' ').join(''); password = password.value; password2 = password2.value; url = url.value;

        if (password === password2) {

            const { data } = await axios.post('/users/add-user', { userName, email, password, password2, url })

        } else {
            throw new Error("passwords are NOT matched");
        }

        if (!userName || !email || !password || !password2 || !url) throw new Error("no userName, email, password, password2, url in OpenSIgnUpForm");


    } catch (error) {
        console.error(error.message);

    }

    e.target.reset();

}


async function handleLogInForm(e) {

    e.preventDefault();

    try {

        const oldUser = e.target.elements
        let { email, password } = oldUser;
        email = email.value.split(' ').join('');
        password = password.value.split(' ').join('');

        const { data } = await axios.get(`/users/log-user?loginEmail=${email}&loginPassword=${password}`)

        userLogedIn.addlogData(data)


        if (!email || !password) throw new Error("no email || password in handleLogInForm");

    } catch (error) {
        console.error(error.message);

    }

    e.target.reset();
}



interface UserData {
    logData: Array<logInfo>;
    addlogData(userName: String): Object;
}

interface logInfo {
    data: Object;
    id: String;
}

let userLogedIn = {
    logData: [],
    addlogData(data) {
        // const uid = Date.now().toString(36) + Math.random().toString(36).substr(2);
        this.logData.push(data)
        console.log(this.logData);

    },
}




















