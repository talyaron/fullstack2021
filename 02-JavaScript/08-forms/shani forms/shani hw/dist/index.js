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
    ;
    // const employ = { first, last, user, pass, mon, day, gen, tel }
    // console.log(employ);
    // const fn: any = document.querySelector(".firstname");
    // fn.innerHTML = first
    // console.log(first)
    var result = document.querySelector('.firstnameCard');
    // const formObj = {};
    // console.log(e)
    // let i
    // for(i of e.target){
    //     if(i.firstname !== 'submit') formObj[i.firstname] = i.value;
    // }
    // console.log(formObj);
    //katya תירגול
    // interface Info {
    //     firstname?: string
    // }
    // function handleSubmit1(e: any): void {
    //     e.preventDefault();
    //     const result: any = document.querySelector('.firstnameCard');
    //     const formObj: Info = {}
    //     let i
    //     for (i of e.target) {
    //         // console.log(i)
    //         if (i.name !== 'submit') formObj[i.name] = i.value;
    //     }
    //     console.log(formObj)
    // }
    result.innerHTML = "" + first;
}
