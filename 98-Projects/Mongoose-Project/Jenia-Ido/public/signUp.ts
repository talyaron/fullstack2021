interface User {
    firstName: string
    lastName: string
    birthday: any
    country: string
    password: string
    email: string
    gender: string
}


function showSignUpFrom(ev) {
    const display: any = document.querySelector('.main_display')
    // console.dir(ev.target);

    let btnId = ev.target.id;

    if (btnId == 'signUp') {
        forms.renderSignUpFormfirstPage(display)
    } else if (btnId == 'signIn') {
        forms.renderSignIn(display)
    }
    // console.log(btnId);
}
function HandleSettingsMenu() {
    const settings = document.querySelector(".settings")
    settings.classList.toggle("setting-active");
    const updateForm = document.querySelector('.settings_buttons-updateForm')
    updateForm.classList.toggle("updateForm");

}
async function handleUpdateProfile(ev) {
    const email = ev.target.id;
    const password = ev.target.name;
    const userData = await axios.get(`/user/get-user?email=${email}&password=${password}`);
    const imagesData = await axios.get(`/images/get-images?email=${email}&password=${password}`);
    const user = { ...userData.data };
    const images = { ...imagesData.data };
    // console.log(user)
    // console.log(images);


    renderUpdateForm(user, images)


}

const forms = {
    renderSignUpFormfirstPage: function (display: any) {
        display.innerHTML = `
        <form id="firstPage" class="main_display-signUpForm" onsubmit="newUserDetails(event)" style="animation: signUpAnimation 2s 1s forwards;">
<h1 class="main_display-signUpForm-header">enter details and create account</h1>
<label class="" style="color:white;">birthday: </label>
<input type="date" name="birthDay" id="birthDay" style="background-color:gray";>
<input class="main_display-signUpForm-input" type="text" name="firstName" id="firstName" placeholder="Enter first name">
<input class="main_display-signUpForm-input" type="text" name="lastName" id="lastName" placeholder="Enter last name">
<input class="main_display-signUpForm-input" type="text" name="country" id="country" placeholder="your country">
<select class="main_display-signUpForm-genderSelect" name="gender" id="gender">
        <option hidden>Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>  
<input class="main_display-signUpForm-input" type="password" name="password" id="password" placeholder="Create Password..." required>
<input class="main_display-signUpForm-input" type="password" name="passwordConfirm" id="passwordConfirm" placeholder="confirm password..." required>
<input class="main_display-signUpForm-input" type="email" name="email" id="email" placeholder=" Enter email..." required>
<input class="main_display-signUpForm-submit" name="submit" type="submit" href="proflie.html" value="Go to profile">
</form>`
    }, renderSignIn: function (display) {
        display.innerHTML = `
    <form class="main_display-signInForm" style="animation: signInAnimation 1.5s 1s forwards;" onsubmit="HandleLogin(event)">
    <label class="main_display-signInForm-label">enter your email : 
    <input class="main_display-signInForm-input" type="email" name="email" id="email">
    </label> 
    <label class="main_display-signInForm-label">enter password :
    <input class="main_display-signInForm-input" type="password" name="password" id="password">
    </label>
    <button class="main_display-signInForm-submit" type="submit" name="logInSubmit" id="logInSubmit">log in</button>  
    </form>`
    }
}

async function renderProfile(email, password) {
    const userData = await axios.get(`/user/get-user?email=${email}&password=${password}`);
    const imagesData = await axios.get(`/images/get-images?email=${email}&password=${password}`);
    let i = 0;
    const error = userData.data.error;

    if (error) {
        alert(error)
    } else {
        const user = { ...userData.data.result[0] };
        const imgs = { ...imagesData.data.result[0] };
        const display: any = document.querySelector('.main')
        let html = "";

        html += `<section class="profile">

    <div class="profile__navBar--top">
        <a href="index.html"><i class="fas fa-arrow-left fa-xs"></i></a>
        <i class="fas fa-wrench fa-xs" onclick="HandleSettingsMenu()"></i>
    </div>
    <nav class="settings">
    <li><button class="settings_buttons" id="${user.email}" name="${user.password}" onclick='handleUpdateProfile(event)'>update Profile</button></li>
    <li><button class="settings_buttons delete" id="${user.email}" onclick="handleDeleteProfile(event)">delete user</button></li>
    <div id='updateRoot'></div>
    </nav>
    <div id="profilePic"></div>
    <div class="profile__header">
        <div class="profile__header__imgBorder"  style="background-image: url(${imgs.profileUrl})">
        <button class="profile__header__imgBorder-changeImage" name="${user.email}"
        id="${imgs.profileUrl}" lang="${user.password}" "type="button" onclick="showProfilePicture(event)">View</button>
        </div>
        <div class="profile__header__name">${user.firstName} ${user.lastName}</div>
        <div class="profile__header__birthday">${user.birthday}</div>
        <div class="profile__header__country">${user.country}</div>
        <div class="profile__header__gender">${user.gender}</div>
        
        <button class="profile__header__addButton" name="${user.password}" id="${user.email}" onclick="AddImage(event)">Add Post</button>
    </div>
    <div id="addPost"></div>
   
    
    <div class="profile__user__pics"></div>
        <div class="profile__navBar--down">
    <div class="homeIcon"><a href="index.html"><i class="fas fa-home"></i></a></div>
    <div class="profileIcon"><i class="fas fa-user"></i></div>
    <div class="compassIcon" onclick="browserUser(event)"><a href="browse.html"><i class="fas fa-compass"></i></a></div>
    <div class="heartIcon"><i class="fas fa-heart"></i></div>
    </div>
    </section>`;
        display.innerHTML = html;
        renderUserImgs(imgs);
    }
}
async function renderUserImgs(list) {
    let html = " ";
    const imgs = list.url


    const display = document.querySelector('.profile__user__pics')
    imgs.forEach(img => {
        html += `<div class="profile__user__pics-userPics" style="background-image:url(${img});"></div>`
    })


    display.innerHTML = html;
}
async function AddImage(ev) {
    const email = ev.target.id;
    const password = ev.target.name;
    const root = document.querySelector("#addPost");
    let html = "";
    html = `<form name="${password}" id="${email}" onsubmit="handleAddImage(event)">
    <input type="text" name="newPostUrl" placeholder="add Url Post">
    <input type="submit" value="submit">
    </form>`;
    root.innerHTML = html;
}
async function handleAddImage(ev) {
    try {
        ev.preventDefault();
        const email = ev.target.id;
        const password = ev.target.name;
        const url = ev.target.elements.newPostUrl.value;
        console.log(email);
        console.log(url);



        const { ok, data, error } = await axios.patch('/images/add-post', { email, url })

        renderProfile(email, password);


    } catch (err) {
        console.error(err);
    }
}
function renderUpdateForm(user, imgs) {
    const root = document.querySelector("#updateRoot");
    let html = "";
    html += ` <form class="settings_buttons-updateForm" name="${user.result[0].password}"  id="${user.result[0].email}" onsubmit="HandleUpdate(event)">
    <input class="settings_buttons-updateForm-input" type="text" name="firstName" value="${user.result[0].firstName}" id="firstName" >
    <input class="settings_buttons-updateForm-input" type="text" name="lastName" value="${user.result[0].lastName}" id="lastName">
    <input class="settings_buttons-updateForm-input" type="text" name="country" value="${user.result[0].country}" id="country" >
    <input class="settings_buttons-updateForm-submit" type="submit" value="Update Profile">
    </form>`;
    root.innerHTML = html;

}

async function HandleLogin(ev) {
    try {
        ev.preventDefault();
        const password = ev.target.elements.password.value;
        // console.log(password)
        const email = ev.target.elements.email.value;
        // console.log(email);
        // const userData = await axios.get(`/user/get-user?email=${email}&password=${password}`);
        // const imagesData = await axios.get(`/images/get-images?email=${email}&password=${password}`);
        // const user = { ...userData.data };
        // const images = { ...imagesData.data };

        // console.log(user);
        // console.log(images);
        localStorage.setItem("UserEmail", JSON.stringify(`${email}`));
        localStorage.setItem("UserPassword", JSON.stringify(`${password}`));
        renderProfile(email, password);

    }
    catch (error) {
        console.error(error.message)
    }
}

async function newUserDetails(ev) {

    ev.preventDefault()
    const form = ev.target
    const display = document.querySelector('.main_display')
    // console.dir(form);


    let birthday, firstName, lastName, country, gender, password, email;

    for (let field of ev.target) {
        if (field.name !== "submit") {
            if (field.name == "birthDay") {
                birthday = field.value;
            } else if (field.name == "firstName") {
                firstName = field.value;
            } else if (field.name == "lastName") {
                lastName = field.value;
            } else if (field.name == "country") {
                country = field.value;
            } else if (field.name == "gender") {
                gender = field.value;
            } else if (field.name == "password") {
                password = field.value;
            } else if (field.name == "email") {
                email = field.value;
            }
        }
    }

    const newUser: User = { firstName, lastName, birthday, country, password, email, gender }
    const userData = await axios.post('/user/add-user', { newUser });
    const imagesData = await axios.post('/images/add-images', { email, password });
    // const user = { ...userData.data };
    // const images = { ...imagesData.data };



    renderProfile(email, password)
}

async function HandleUpdate(ev) {
    try {
        ev.preventDefault();
        const email = ev.target.id;
        const password = ev.target.name;
        let firstName, lastName, country;

        for (let field of ev.target) {
            if (field.name !== "submit") {
                if (field.name == "firstName") {
                    firstName = field.value;
                } else if (field.name == "lastName") {
                    lastName = field.value;
                } else if (field.name == "country") {
                    country = field.value;
                }
            }
        }
        const updateUser = { firstName, lastName, country, email }
        const { ok, error } = await axios.patch('/user/update-user', updateUser);


        renderProfile(email, password);



    }
    catch (err) {
        console.error(err.message)
    }



}

async function handleDeleteProfile(ev) {
    // console.dir(ev.target);
    const email = ev.target.id;
    // console.log(email);
    try {
        
        const { images } = await axios.delete("/images/delete-images", { data: { email } });
        const { data } = await axios.delete("/user/delete-user", { data: { email } });
        const deleleImages = images;
        const { error, results } = data;
        alert(results);
        if (error) throw new Error(error);
        console.log(results);
    } catch (err) {
        console.error(err);
    }

}

async function showProfilePicture(ev) {

    const email = ev.target.name;
    const profileImg = ev.target.id;
    const password = ev.target.lang;

    const header: any = document.querySelector(".profile__header");
    header.style.opacity = "0.2";
    const root = document.querySelector('#profilePic');
    let html = "";
    html = `  
    <div class="profile-active" style="background-image: url(${profileImg});">
    <div class="exit"><i class="fas fa-check" id="${email}" lang="${password}" onclick="handleExit(event)"></i></div>
    <form class="profile-active__input" id="${email}" onsubmit="handleUpdateProfilePic(event)">
     <input class="profile-active__input" name="newUrl" "type="text" placeholder="New Profile url" >
     <input type="submit" value="submit">
     </form>
    </div>`
    root.innerHTML = html;

}
async function handleExit(ev) {
    const email = ev.target.id;
    const password = ev.target.lang;
    

    renderProfile(email, password);
}
async function handleUpdateProfilePic(ev) {
    try {
        console.dir(ev.target)
        ev.preventDefault();
        const email = ev.target.id
        const newImg = ev.target.elements.newUrl.value;

        const { update, ok, error } = await axios.patch('/images/update-profile-img', { email, newImg })
    }
    catch (err) {
        console.error(err.message)

    }

}
async function userCategoryActive(ev) {
    const id = ev.target.id;
    const categories = document.querySelectorAll(".profile__user__category__text")
    categories.forEach(cat => {
        cat.classList.remove("profile__user__category__text--active")
    })
    const category = ev.target;
    category.classList.add("profile__user__category__text--active");
}

async function browserUser() {
    const email = JSON.parse(localStorage.getItem("UserEmail"));
    const password = JSON.parse(localStorage.getItem("UserPassword"));
    try {
        const { ok, data, error } = await axios.patch('/images/get-users-profieImg', { email })
        
        if (error) throw new Error(error)
        const usersProfileImgsList = data.profileImgs
        renderbrowseImgs(usersProfileImgsList)
    } catch (err) {
        console.error(err);
    }
}
function renderbrowseImgs(list) {
    const display = document.querySelector('.browseMain_display')
    let html = " ";
    list.forEach(user => {
        html += `<div class="browseMain_display-userCard" style="background-image:url(${user.img})">
        <div class="browseMain_display-userCard-name">${user.userEmail}</div>
        <button class="browseMain_display-userCard-addFriendBtn" type="button">Add Friend</button>
        </div>`
    })
    display.innerHTML = html;
}
function profileButton(){
    const email = JSON.parse(localStorage.getItem("UserEmail"));
    const password = JSON.parse(localStorage.getItem("UserPassword"));
    renderProfile(email,password);
}


















