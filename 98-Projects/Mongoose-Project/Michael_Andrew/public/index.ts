async function OpenSignUpForm(e) {
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
        site.user = data.oldUser[0];
        localStorage.setItem('user', JSON.stringify(site.user));

        if (!email || !password) throw new Error("no email || password in handleLogInForm");

    } catch (error) {
        console.error(error.message);

    }
    if (window.location.pathname.split("/").pop() == 'register.html') window.location.href = "./account_page.html"
    e.target.reset();
    const signIn = document.querySelector('.sign-in-form')
    signIn.classList.toggle('in-vis');

}

function handleAccount() {
    const popUP = document.querySelector('.sign-in-form');
    if (site.user.userName) {
        popUP.innerHTML = `<p>Hi ${site.user.userName}</p><button onclick="handleLogOut()">Log Out</button>`
    }
    popUP.classList.toggle('in-vis')
}

function handleLogOut() {
    site.user = {};
    localStorage.clear();
    if (window.location.pathname.split("/").pop() == 'account_page.html') window.location.href = "./register.html"
    else location.reload();
}
//למה הוצאת את הסלש ולמה הפנית מהאקונט לרגיסטר אם היוזר יצא
async function handleOnLoad() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) site.user = user
    if (window.location.pathname.split("/").pop() == 'account_page.html') {
        const main = document.querySelector('.main-account')
        main.innerHTML = `<h2>welcome back ${site.user.userName}!</h2>
                        <img src="${site.user.url}">
                        <h3>${site.user.email}</h3>
                        <h3>Funds: ${site.user.fund} BTC</h3>`
    }
    const { data } = await axios.get(`/arts/get-user-art?userId=${site.user._id}`);
    console.log(data);
    
}
//למה לא להוסיף לינק ב- HTML
function handleAccountRedirect() {
    if (site.user.userName) window.location.href = "./account_page.html";
    else window.location.href = "./register.html"
}

function handleAccountOption(ev) {
    const page = ev.target.id;
    let html = '';
    const main = document.querySelector('.main-account');
    switch (page) {
        case 'main':
            handleOnLoad()
            return;
        case 'settings':
            html = `<h2>Account Settings</h2>
            <form onsubmit="handleSettingsForm(event)">
                <input type="text" name="userName" value="${site.user.userName}">
                <input type="submit" value="update username">
            </form>
            <form onsubmit="handleSettingsForm(event)">
                <input type="text" name="email" value="${site.user.email}">
                <input type="submit" value="update email">
            </form>
            <form onsubmit="handleSettingsForm(event)">
                <input type="text" name="url" value="${site.user.url}">
                <input type="submit" value="update profile picture">
            </form>
            <form onsubmit="handleSettingsForm(event)">
                <label for="oldPassword">Old password</label>
                <input type="text" name="oldPassword" value="">
                <label for="password">New password</label>
                <input type="text" name="password" value="">
                <label for="password2">Confirm new password</label>
                <input type="text" name="password2" value="">
                <input type="submit" value="update password">
            </form>`
            break;
        case 'stats':
            html = `<h1>Statistics</h1>`
            break;
        case 'create':
            html = `<h1>Add New Art!</h1>
                    <h3>use the form below to add a new art to your collection, the cost of adding a new art is 3 BTC</h3>
                    <h3>Funds: ${site.user.fund} BTC</h3>
                    <form onsubmit="handleAddArt(event)">
                        <label for="url">Copy Image URL to here:</label>
                        <input type="text" name="url">
                        <label for="name">Create a name for your Art:</label>
                        <input type="text" name="name">
                        <input type="submit">
                    </form>
                    `
            break;
        case 'sale':
            html = `<h1>These are the items you listed for sale</h1>`
            break;
    }
    main.innerHTML = html;
}

async function handleSettingsForm(ev) {
    ev.preventDefault()
    const toBeUpdated = ev.target[0].name
    const value = ev.target[0].value
    console.log(toBeUpdated);
    if (toBeUpdated == 'password') {
        if (value == site.user.password) {
            if (ev.target[1].value == ev.target[2].value) {
                site.user[toBeUpdated] = ev.target[1].value;
                axios.patch('/users/update-user', { user: site.user });
                localStorage.setItem('user', JSON.stringify(site.user));
            }
            else {
                // add alert passwords do not match
            }
        }
        else {
            // add alert wrong password
        }
    }
    else {
        site.user[toBeUpdated] = value;
        axios.patch('/users/update-user', { user: site.user });
        localStorage.setItem('user', JSON.stringify(site.user));
    }

}

async function handleAddArt(ev) {
    ev.preventDefault()
    const newArt = { name: ev.target.name.value, url: ev.target.url.value, author: site.user.userName};
    await axios.post('/users/add-art', {newArt, user: site.user});

}

interface UserData {
    logData: Array<logInfo>;
    addlogData(userName: String): Object;
}

interface logInfo {
    data: Object;
    id: String;
}
// volatile database for current user and etc'
const site = {
    user: {}
}

//sideBar

function handleStatusClick () {

    document.querySelector('.status-buttons').classList.toggle('toggle');
    
}

function handleOnSale(){

    const onSale = document.querySelector('.onSale')
    onSale.classList.toggle('hidden');
    
}






















