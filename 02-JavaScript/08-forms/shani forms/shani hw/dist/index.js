function handleSubmit1(e) {
    e.preventDefault();
    console.log(e);
    var first = e.target.firstname.value;
    console.log('first name is ' + first);
    var last = e.target.lastname.value;
    console.log('last name is ' + last);
    var user = e.target.username.value;
    console.log('username is ' + user);
    var pass = e.target.password.value;
    console.log('password is ' + pass);
    var passConfirm = e.target.confirm.value;
    console.log('password confirmed is ' + passConfirm);
    var mon = e.target.month.value;
    var day = e.target.day.value;
    console.log('birthday is ' + mon + "-" + day);
    var gen = e.target.gender.value;
    console.log('gender is ' + gen);
    var tel = e.target.phone.value;
    console.log('phone number is ' + tel);
    //confirming password entered
    if (pass === passConfirm) {
        pass;
    }
    else {
        alert('PASSWORD CONFIRMATION IS INCORRECT!');
    }
    var employ = { first: first, last: last, user: user, pass: pass, mon: mon, day: day, gen: gen, tel: tel };
    console.log(employ);
    var fn = document.querySelector("#firstname");
    fn.innerHTML = first;
}
