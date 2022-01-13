interface User {
    name?: string
    lastName?: string
    email?: string
    password?: string
    birthday?: Date
    gender?: string
    phone?: number
}

let user: User = {}

const card = document.querySelector('#info')

function hendleSubmit(e: any): void {
    e.preventDefault()

    const name: string = e.target.children.name.value
    const lastName: string = e.target.children.lastname.value
    const email: string = e.target.children.email.value
    const password: string = e.target.children.password.value
    const confirmPassword: string = e.target.children.confirmPassword.value
    const birthday: Date = e.target.children.birthday.value
    const gender: string = e.target.children.gender.value
    const phone: number = e.target.children.phone.value

    // console.log(name);
    // console.log(lastName);
    // console.log(email);
    // console.log(password);
    // console.log(confirmPassword);
    // console.log(birthday);
    // console.log(gender);
    // console.log(phone);

    if (password === confirmPassword) {
        password
    } else {
        window.alert('The password need to be the same')
    }

    user = { name, lastName, email, password, birthday, gender, phone }
    console.log(user)

    card.innerHTML =
        `
    <div class="info">
        <div class="info__top">
            <p class="info__top--p">Company</p>
        </div>
        <img class="info__img"
            src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"
            alt="img">
        <div class="info__nameDate">
            <h3>${user.name} ${user.lastName}</h3>
            <p>${user.birthday}</p>
        </div>
        <div class="info__dryInfo">
            <p>${user.email}</p>
            <p>${user.password}</p>
            <p>${user.gender}</p>
            <p>${user.phone}</p>
        </div>
    </div>
    `
}

