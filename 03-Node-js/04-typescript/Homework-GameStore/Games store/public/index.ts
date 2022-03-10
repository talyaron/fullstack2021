
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






const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

form.addEventListener('submit', (e) => {
    e.preventDefault();
   
    checkInputs()


})

async function checkInputs() {

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

    if (usernameValue !== '' && emailValue !== '' && passwordValue !== '' && password2Value !== '' && passwordValue === password2Value){
        const { data } = await axios.post('/add-user', { username: usernameValue, email:  emailValue, password: passwordValue});
        const {userInsideOrNot} = data
        
        if (userInsideOrNot === true){
           

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




























