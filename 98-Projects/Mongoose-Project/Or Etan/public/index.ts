async function handleLogin(ev) {
    ev.preventDefault();
const email = ev.target.elements.email.value;
const password = ev.target.elements.password.value;
console.log(email);

const {data} = await axios.post("/log-in", {email,password});
console.log(data);
}