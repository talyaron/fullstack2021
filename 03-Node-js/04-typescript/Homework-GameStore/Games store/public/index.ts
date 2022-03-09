
async function handleLoad(e) {

    try {

        await axios.get(`/all-games`)
            .then(({ data }) => {
                const root = document.querySelector('#root')

                renderArticles(root, data)
                // console.log(data);

                if (!root) throw new Error("no root in handleLoad");

            })

    } catch (error) {
        console.error(error);

    }

    ///client login

    const form = document.getElementById('form')
    const username = document.getElementById('username')
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    const password2 = document.getElementById('password2')


    const container = document.querySelector('.container')
    container.style.visibility = "hidden"


    setTimeout(() => {
        container.style.visibility = 'visible'
    }, 3000);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs(form, username, email, password, password2)

    })


}

async function handleGetGameById(e) {

    try {

        e.preventDefault();
        const id = e.target.elements.id.value;

        await axios.get(`/get-game-by-id?search=${id}`)
            .then(({ data }) => {
                const root = document.querySelector('#root');
                const rootFindGame = document.querySelector('#rootFindGame');

                if (data[0] === null) {
                    rootFindGame.innerHTML = `You have ${data[1]} games`
                } else {
                    let arrayToRender = [data[0]];
                    rootFindGame.innerHTML = `You found the game, please see below. You can refresh the page to see all games`
                    renderArticles(root, arrayToRender)
                }

                if (!id) throw new Error("no root or rootFindGame in handleGetGameById");
                if (!id) throw new Error("no id in handleGetGameById");

            })

        e.target.reset();

    } catch (error) {
        console.error(error.message);
    }


}

async function handleaddGame(e) {



    try {

        e.preventDefault();

        const addGame = { name: e.target.elements.add.value, price: e.target.elements.price.valueAsNumber }
        // const {game} =addGame
        // console.log(addGame.price); 

        // if (typeof addGame.game === "string"){
        const { data } = await axios.post('/add-game', { addGame });
        // console.log(data);


        if (!data) throw new Error("no data in handleaddGame");
        //}       

        e.target.reset();

    } catch (error) {
        console.error(error);

    }

}

function renderArticles(root, games) {

    try {
        if (!games || !root) throw new Error("no games || root in renderArticles");

        let html = '';
        games.forEach(game => {
            html += `<div class="card">
           <p>${game.name}: ${game.price} ILS</p>
           </div>
           <form id="${game.id}" class="updateGame" onsubmit="handleUpdateGame(event)">
           <input type="text" name="name" id="" placeholder="Please update the Game">
           <input type="number" name="price" id="" placeholder="Please update the Price">
           <input type="submit" value="Update">
           </form>`
        });
        root.innerHTML = html;

    } catch (error) {
        console.error(error);

    }

}

async function handleUpdateGame(e) {

    try {

        e.preventDefault();

        const id = e.target.id;

        const updateGame = { name: e.target.elements.name.value, price: e.target.elements.price.valueAsNumber };
        // console.log({...updateGame, id:id});


        const { data } = await axios.patch('update-game', { ...updateGame, id });
        const root = document.querySelector('#root');
        renderArticles(root, data)

        // if (typeof updateGame.name === 'number'){
        //}


        if (!id) throw new Error("no id in handleUpdateGame");


        e.target.reset();

    } catch (error) {

    }

}

///client login

async function checkInputs(form, username, email, password, password2) {

    const usernameValue = username.value.split(' ').join('')
    const emailValue = email.value.split(' ').join('')
    const passwordValue = password.value
    const password2Value = password2.value

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank')
    } else {
        setSuccessFor(username)
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else {
        setSuccessFor(password)
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank')
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords are not matched')
    } else {
        setSuccessFor(password2)
    }

    if (usernameValue !== '' && emailValue !== '' && passwordValue !== '' && password2Value !== '' && passwordValue === password2Value) {
        const { data } = await axios.post('/add-user', { username: usernameValue, email: emailValue, password: passwordValue });
        const { userInsideOrNot } = data

        if (userInsideOrNot === true) {
            renderToRegister(usernameValue)
        } else {
            setErrorFor(password2, data)
            handleLogin();
        }

    }

}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

function renderToRegister(usernameValue) {
    const sucssesToRegister = document.querySelector('#sucssesToRegister')

    let html = `<h1>Welcome ${usernameValue}</h1>`

    setTimeout(() => {
        sucssesToRegister.className = 'sucssesToRegister sucess'
        sucssesToRegister.innerHTML = html
    }, 2000);
    console.log(sucssesToRegister);

}

function handleLogin() {
    const container = document.querySelector('.container')
    const container2 = document.querySelector('.container2')

    container2.style.visibility = 'visible'



}

async function showLoginForm(event) {

    event.preventDefault();

    const loginUserName = event.target.elements.usernameLogin.value
    const passwordValue = event.target.elements.emailLogin.value
    const container2Root = document.querySelector('#container2Root')

    await axios.get(`/get-password-and-username?loginName=${loginUserName}&loginPassword=${passwordValue}`)
        .then(({ data }) => {

            if (data.check === true) {
                let html = `<h4 style="color:#2ecc71;">Welcome Back ${data.name}!</h4>`
                container2Root.innerHTML = html

                const container = document.querySelector('.container')
                const container2 = document.querySelector('.container2')



                setTimeout(() => {
                    container.style.visibility = "hidden"
                    container2.style.visibility = "hidden"
                }, 2000);



            } else {
                let html2 = `<h4 style="color:red;">Please Try Again</h4>`
                container2Root.innerHTML = html2
            }

        })

    event.target.reset();
}




























