async function handleShowAll(ev){
  ev.preventDefault();
  
const logInUsername = ev.target.logInUsername.value;
const logInPassword = ev.target.logInPassword.value;
try {

  console.log(ev, 'hello 1');
  const {data}= await axios.get(`get-users?logInUsername=${logInUsername}&logInPassword=${logInPassword}`);
  console.log(ev, 'hello 2');

if (data>-1) throw new Error(`we dont have a user with username ${logInUsername}`);
//     const {data} = await axios.get(`/get-users`)
//     console.log(data);
//     const {users} = await data;
//     console.log(users);
//     if(users){
// renderUsers(users);
//     }
  
} catch (error) {
  console.error(error)
}
}



function renderUsers(list){
let html;
list.forEach((user) => {
    html += `<div id='${user.id}' class='user'>
    <h1 class='card_user-name'>${user.username}</h1> <p class='card_user-role'>${user.role}</p>
    <div class='card_personal'>
    <p>${user.firstName}</p>  <p>${user.lastName}</p>
    </div>
    <p>${user.birthDate}</p>
    <input type='password' class='card_user-password' value='${user.password}'>
    </div>`
})
document.querySelector('.empty').innerHTML = html;
}


async function handleRegister(ev) {
  ev.preventDefault();
  console.log(ev.target.elements);
  let { firstName, lastName, birthDate, role, username, password} = ev.target.elements;
  console.log(username, password);
  firstName = firstName.value;
  lastName = lastName.value;
  birthDate = birthDate.value;
  role = role.value;
  username = username.value;
  password = password.value;
console.log(birthDate);

  const { data } = await axios.post("/add-user", {firstName, lastName, birthDate, role, username, password});
  console.log(data);
}
