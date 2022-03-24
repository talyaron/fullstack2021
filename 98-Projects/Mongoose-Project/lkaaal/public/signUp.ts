const forms = {
    renderSignUpFormfirstPage: function (display: any) {
        display.innerHTML = `
        <form class="main_display-signUpForm" onsubmit="newUserDetails(event)" style="animation: signUpAnimation 2s 1s forwards;">
<h1 class="main_display-signUpForm-header">enter details and create account</h1>
<input class="main_display-signUpForm-input" type="text" name="userName" id="userName" placeholder="Choose user Name...">
<input class="main_display-signUpForm-input" type="text" name="firstName" id="firstName" placeholder="Enter first name">
<input class="main_display-signUpForm-input" type="text" name="lastName" id="lastName" placeholder="Enter last name">
<input class="main_display-signUpForm-input" type="text" name="country" id="country" placeholder="your country">
<select name="main_display-signUpForm-genderSelect" id="genderSelect">
        <option hidden>Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        </select>  
<input class="main_display-signUpForm-submit" type="submit" value="continue">
        </form>`
    }, renderSignUpFormSecondPage: function (display: any) {
        setTimeout(function () {
            display.innerHTML = `
        <form class="main_display-signUpForm" onsubmit="creatNewUser(event)" style="animation: signUpAnimation 2s 1s forwards;">
        <h1 class="main_display-signUpForm-header">enter details and create account</h1>
        <input class="main_display-signUpForm-input" type="password" name="password" id="password" placeholder="Create Password...">
        <input class="main_display-signUpForm-input" type="password" name="passwordConfirm" id="passwordConfirm" placeholder="confirm password...">
        <input class="main_display-signUpForm-input" type="email" name="email" id="email" placeholder=" Enter email...">
        <input class="main_display-signUpForm-submit" type="submit" value="Go to profile">
                </form>`}, 1800)
    }, renderSignIn: function (display) {
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

function newUserDetails(ev) {

    ev.preventDefault()
    const form = ev.target
    console.dir(form[0].value);

    const display = document.querySelector('.main_display')
    form.style.opacity = "1"
    form.style.margin = "auto"
    form.style.animationName = "signUpContinue"
    form.style.animationDelay = "1s"
    form.style.animationDuration = "2s"
    form.style.animationFillMode = "forwards"
    const showSecondPage = forms.renderSignUpFormSecondPage(display)



}
function creatNewUser(ev) {

    ev.preventDefault()
    const form = ev.target
    console.dir(ev.target);
    console.log(ev.target.style[0]);

}