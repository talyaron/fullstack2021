import {
    application
} from "express";

async function handleLogin(ev)   {
    ev.preventDefault();
    const userName = ev.target.user_name.value;
    const password = ev.target.password.value;

    console.log(userName, password)

   const {data} =  await axios.post("/login",{user:userName,password:password}) 
console.log(data);

  


}
async function handleRegister(ev)   {
    ev.preventDefault();
    const userName = ev.target.user_name.value;
    const password = ev.target.password.value;
    const age = ev.target.age.value;
    console.log(userName, password,age)
    const {data} =  await axios.post("/register",{user:userName,password:password,age:age}) 
console.log(data);



}