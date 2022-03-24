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
<input class="main_display-signUpForm-input" type="password" name="password" id="password" placeholder="Create Password..." >
<input class="main_display-signUpForm-input" type="password" name="passwordConfirm" id="passwordConfirm" placeholder="confirm password..." >
<input class="main_display-signUpForm-input" type="email" name="email" id="email" placeholder=" Enter email...">
<input class="main_display-signUpForm-submit" name="submit" type="submit" value="Go to profile" >
</form>`
    },renderSignIn: function (display) {
        display.innerHTML = `
    <form class="main_display-signInForm" style="animation: signInAnimation 1.5s 1s forwards;">
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
    console.dir(ev.target);

    let btnId = ev.target.id;

    if (btnId == 'signUp') {
        forms.renderSignUpFormfirstPage(display)
    } else if (btnId == 'signIn') {
        forms.renderSignIn(display)
    }
    console.log(btnId);
}

async function newUserDetails(ev) {

    ev.preventDefault()
    const form = ev.target
    const display = document.querySelector('.main_display')
    console.dir(form);
    

    let birthday, firstName, lastName, country, gender, password, email;
    // var birthday = new Date(birthdayInput);

    

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
    console.log(birthday);
    const newUser:User = { firstName ,lastName,birthday,country,password,email,gender}
    const {data} = await axios.patch('/get-addNewUser', {newUser});
    
}

function creatNewUser(ev) {

    ev.preventDefault()
    const form = ev.target
    console.dir(ev.target);
    console.log(ev.target.style[0]);

}