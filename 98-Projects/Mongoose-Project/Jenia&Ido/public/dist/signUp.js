var forms = {
    renderSignUpFormfirstPage: function (display) {
        display.innerHTML = "\n        <form class=\"main_display-signUpForm\" onsubmit=\"newUserDetails(event)\" style=\"animation: signUpAnimation 2s 1s forwards;\">\n<h1 class=\"main_display-signUpForm-header\">enter details and create account</h1>\n<input class=\"main_display-signUpForm-input\" type=\"text\" name=\"userName\" id=\"userName\" placeholder=\"Choose user Name...\">\n<input class=\"main_display-signUpForm-input\" type=\"text\" name=\"firstName\" id=\"firstName\" placeholder=\"Enter first name\">\n<input class=\"main_display-signUpForm-input\" type=\"text\" name=\"lastName\" id=\"lastName\" placeholder=\"Enter last name\">\n<input class=\"main_display-signUpForm-input\" type=\"text\" name=\"country\" id=\"country\" placeholder=\"your country\">\n<select name=\"main_display-signUpForm-genderSelect\" id=\"genderSelect\">\n        <option hidden>Gender</option>\n        <option value=\"male\">Male</option>\n        <option value=\"female\">Female</option>\n        </select>  \n<input class=\"main_display-signUpForm-submit\" type=\"submit\" value=\"continue\">\n        </form>";
    }, renderSignUpFormSecondPage: function (display) {
        setTimeout(function () {
            display.innerHTML = "\n        <form class=\"main_display-signUpForm\" onsubmit=\"creatNewUser(event)\" style=\"animation: signUpAnimation 2s 1s forwards;\">\n        <h1 class=\"main_display-signUpForm-header\">enter details and create account</h1>\n        <input class=\"main_display-signUpForm-input\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"Create Password...\">\n        <input class=\"main_display-signUpForm-input\" type=\"password\" name=\"passwordConfirm\" id=\"passwordConfirm\" placeholder=\"confirm password...\">\n        <input class=\"main_display-signUpForm-input\" type=\"email\" name=\"email\" id=\"email\" placeholder=\" Enter email...\">\n        <input class=\"main_display-signUpForm-submit\" type=\"submit\" value=\"Go to profile\">\n                </form>";
        }, 1800);
    }, renderSignIn: function (display) {
        display.innerHTML = "\n    <form class=\"main_display-signInForm\" style=\"animation: signInAnimation 1.5s 1s forwards;\">\n    <label class=\"main_display-signInForm-label\">enter your email : \n    <input class=\"main_display-signInForm-input\" type=\"email\" name=\"email\" id=\"email\">\n    </label> \n    <label class=\"main_display-signInForm-label\">enter password :\n    <input class=\"main_display-signInForm-input\" type=\"password\" name=\"password\" id=\"password\">\n    </label>\n    <button class=\"main_display-signInForm-submit\" type=\"submit\" name=\"logInSubmit\" id=\"logInSubmit\">log in</button>  \n    </form>";
    }
};
function showSignUpFrom(ev) {
    var display = document.querySelector('.main_display');
    console.dir(ev.target);
    var btnId = ev.target.id;
    if (btnId == 'signUp') {
        forms.renderSignUpFormfirstPage(display);
    }
    else if (btnId == 'signIn') {
        forms.renderSignIn(display);
    }
    console.log(btnId);
}
function newUserDetails(ev) {
    ev.preventDefault();
    var form = ev.target;
    console.dir(form[0].value);
    var display = document.querySelector('.main_display');
    form.style.opacity = "1";
    form.style.margin = "auto";
    form.style.animationName = "signUpContinue";
    form.style.animationDelay = "1s";
    form.style.animationDuration = "2s";
    form.style.animationFillMode = "forwards";
    var showSecondPage = forms.renderSignUpFormSecondPage(display);
}
function creatNewUser(ev) {
    ev.preventDefault();
    var form = ev.target;
    console.dir(ev.target);
    console.log(ev.target.style[0]);
}
