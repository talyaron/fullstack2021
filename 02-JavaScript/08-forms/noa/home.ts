
const card1 = document.querySelector('.card1')
console.log(card1)

let data:Data = {}

interface Data {
    firstname?: string
    lastname?: string
    username?: string

}

function handleSubmit(e) {
    e.preventDefault()

    console.log(e)
    const firstname: string = e.target.firstName.value
    const lastname: string = e.target.lastName.value
    const username: string = e.target.email.value

    console.log(firstname)
    data = { firstname, lastname, username }

    card1.innerHTML =
   `
   <div class="card"
   <div class="top"></div>
   
   <div class="name">
   <h1> ${firstname} ${lastname}</h1>
   <h2> ${username}
   
   </div>
   
   </div>
   
   
   
   `


}