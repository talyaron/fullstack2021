function handleSubmit1(e: any): void {
    e.preventDefault();

    console.log(e);

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

    const tel = e.target.phone.value
    console.log('phone number is ' + tel);

    //confirming password entered

    if (pass === passConfirm) {
        pass
    }else {
        alert('PASSWORD CONFIRMATION IS INCORRECT!')
    };

    

    


    // const fn: any = document.querySelector(".firstname");
    // fn.innerHTML = first

    // console.log(first)




    // const result:any = document.querySelector('.firstnameCard');
    // // const formObj = {};
    // // console.log(e)
    // // let i
    // // for(i of e.target){

    // //     if(i.firstname !== 'submit') formObj[i.firstname] = i.value;
    // // }
    // // console.log(formObj);

    // result.innerHTML = `${first}`


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




    
    const fn:any = document.querySelector('.firstnameCard');
    fn.innerHTML = `${first}`

    const ln:any = document.querySelector('.lastnameCard');
    ln.innerHTML = `${last}`

    const un:any = document.querySelector('.usernameCard');
    un.innerHTML = `${user}`

    const pw:any = document.querySelector('.passwordCard');
    pw.innerHTML = `${pass}`

    const bday:any = document.querySelector('.birthdayCard');
    bday.innerHTML = `${mon}-${day}`
    
    const p = document.querySelector('.phoneCard');
    p.innerHTML = `${tel}`


    const g = document.querySelector('.genderCard');
    g.innerHTML = `${gen }`

   
   


}