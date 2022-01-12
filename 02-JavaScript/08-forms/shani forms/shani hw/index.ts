function handleSubmit1(e: any): void {
    e.preventDefault();

    console.log(e)

    const first: string = e.target.firstname.value
    console.log('first name is ' + first);

    const last: string = e.target.lastname.value
    console.log('last name is ' + last);

    const user: any = e.target.username.value
    console.log('username is ' + user);

    const pass: any = e.target.password.value
    console.log('password is ' + pass);

    const passConfirm: any = e.target.confirm.value
    console.log('password confirmed is ' + passConfirm);

    const mon: number = e.target.month.value
    const day = e.target.day.value
    console.log('birthday is ' + mon + "-" + day);

    const gen = e.target.gender.value
    console.log('gender is ' + gen);

    const tel: number = e.target.phone.value
    console.log('phone number is ' + tel);

    //confirming password entered

    if (pass === passConfirm) {
        pass
    } else {
        alert('PASSWORD CONFIRMATION IS INCORRECT!')
    }


   
    const employ = { first, last, user, pass, mon, day, gen, tel }
    console.log(employ)

    

    const fn:any=document.querySelector("#firstname");
    fn.innerHTML=first

  
}