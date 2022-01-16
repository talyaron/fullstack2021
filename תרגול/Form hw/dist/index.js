var user = {};
var card = document.querySelector('#info');
function hendleSubmit(e) {
    e.preventDefault();
    var name = e.target.children.name.value;
    var lastName = e.target.children.lastname.value;
    var email = e.target.children.email.value;
    var password = e.target.children.password.value;
    var confirmPassword = e.target.children.confirmPassword.value;
    var birthday = e.target.children.birthday.value;
    var gender = e.target.children.gender.value;
    var phone = e.target.children.phone.value;
    // console.log(name);
    // console.log(lastName);
    // console.log(email);
    // console.log(password);
    // console.log(confirmPassword);
    // console.log(birthday);
    // console.log(gender);
    // console.log(phone);
    if (password === confirmPassword) {
        password;
    }
    else {
        window.alert('The password need to be the same');
    }
    user = { name: name, lastName: lastName, email: email, password: password, birthday: birthday, gender: gender, phone: phone };
    console.log(user);
    card.innerHTML =
        "\n    <div class=\"info\">\n        <div class=\"info__top\">\n            <p class=\"info__top--p\">Company</p>\n        </div>\n        <img class=\"info__img\"\n            src=\"https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg\"\n            alt=\"img\">\n        <div class=\"info__nameDate\">\n            <h3>" + user.name + " " + user.lastName + "</h3>\n            <p>" + user.birthday + "</p>\n        </div>\n        <div class=\"info__dryInfo\">\n            <p>" + user.email + "</p>\n            <p>" + user.password + "</p>\n            <p>" + user.gender + "</p>\n            <p>" + user.phone + "</p>\n        </div>\n    </div>\n    ";
}
