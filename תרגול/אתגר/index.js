const text = document.querySelector('.textPush');

const arr = []

function hendleSubmit(e) {
    e.preventDefault()

    const name = e.target.children.name.value
    const lastname = e.target.children.lastname.value
    const age = e.target.children.age.value
    console.log(text)

    try {
        let obj = { name: name, lastName: lastname, age: age }

        if (name.length == 0 || lastname == '' || age == '') {
            alert("need to fill all the inputs")
        } else {
            text.innerHTML += `
            <div class="items">
                <p><b>Name:</b> ${obj.name}</p>
                <p><b>Last name:</b> ${obj.lastName}</p>
                <p><b>Age:</b> ${obj.age}</p>
            </div>
            `

            arr.push(obj)

            console.log(arr)
        }
    } catch (error) {
        console.log(error)
    }
}

console.log(arr)