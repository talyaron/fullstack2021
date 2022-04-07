// import Art from "../model/artModel";

const site = {
    user: {},
    arts: [],
}

async function OpenSignUpForm(e) {
    e.preventDefault()
    try {

        const newUser = e.target.elements
        let { userName, email, password, password2, url } = newUser;
        userName = userName.value.split(' ').join(''); email = email.value.split(' ').join(''); password = password.value; password2 = password2.value; url = url.value;

        if (password === password2) {

            const { data } = await axios.post('/users/add-user', { userName, email, password, password2, url })

        } else {
            throw new Error("passwords are NOT matched");
        }

        if (!userName || !email || !password || !password2 || !url) throw new Error("no userName, email, password, password2, url in OpenSIgnUpForm");


    } catch (error) {
        console.error(error.message);

    }

    e.target.reset();

}

async function handleLogInForm(e) {
    e.preventDefault();
    try {

        const oldUser = e.target.elements
        let { email, password } = oldUser;
        email = email.value.split(' ').join('');
        password = password.value.split(' ').join('');
                
        const { data } = await axios.get(`/users/log-user?loginEmail=${email}&loginPassword=${password}`)
        const logedUser = data.oldUser[0].userName
        //console.log(logedUser)

        if (logedUser) {
            //window.location.href = 'index.html';

            document.querySelector('#root').innerHTML = `<button onclick=handleAdminGetUsers()>dddddddddddddddddddddddddddddddddddddd</button>`


        }
        site.user = data.oldUser[0];
        //localStorage.setItem('user', JSON.stringify(site.user));

        if (!email || !password) throw new Error("no email || password in handleLogInForm");

    } catch (error) {
        console.error(error.message);

    }
    if (window.location.pathname.split("/").pop() == 'register.html') window.location.href = "./account_page.html"
    e.target.reset();
    const signIn = document.querySelector('.sign-in-form')
    signIn.classList.toggle('in-vis');

    handleOnLoad();
}

async function handleAdminGetUsers() {

    const {data} = await axios.get('/users/admin-get-users')

    


}

function handleAccount() {
    const popUP = document.querySelector('.sign-in-form');
    if (site.user.userName) {
        popUP.innerHTML = `<p>Hi ${site.user.userName}</p><button onclick="handleLogOut()">Log Out</button>`
    }
    popUP.classList.toggle('in-vis')
}

function handleLogOut() {
    site.user = {};
    localStorage.clear();
    if (window.location.pathname.split("/").pop() == 'account_page.html') window.location.href = "./register.html"
    else location.reload();
}

async function handleOnLoad() {
    
    const user = JSON.parse(localStorage?.getItem('user'))


    if (user) site.user = user
    if (window.location.pathname.split("/").pop() == 'account_page.html') {
        const main = document.querySelector('.main-account')
        main.innerHTML = `<h2>welcome back ${site.user.userName}!</h2>
                        <img src="${site.user.url}">
                        <h3>${site.user.email}</h3>
                        <h3>Funds: ${site.user.fund} BTC</h3>`
    }

    if (window.location.pathname.split("/").pop() == 'index.html') {

        const { data } = await axios.get('/arts/art-for-sale')
        const { result } = data;
        //console.log(result);
        renderArtForSale(result);
    }
}


function renderArtForSale(artsForSale) {

    const main = document.querySelector('.main');
    let html = "";

    artsForSale.forEach(art => {
        //console.log(art);

        html += `<div class="main__card">
                    <img src="${art.url}" class="main__card__img">
                    <div class="main__card__discription">
                        <div class="main__card__discription__upper">
                            <div class="main__card__author">
                                <p>${art.artName}</p>
                                <p>by: ${art.author}</p>
                            </div>
                            <div class="main__card__price">
                                <p>price: ${art.price} BTC</p>
                                <p>7 days left</p>
                            </div>
                        </div>
                        <div class="main__card__discription__lower">
                            <div class="main__card__buyNow">`
        if (art.ownerId == site.user._id) {
            html += `<p>Your Sale</p>`
        }
        else {
            html += `<p onclick="handleBuy('${art._id}', '${art.price}','${art.ownerId}')">Buy Now</p>`
        }
        html += `</div>
                            <div class="main__card__likes">
                                <p>3</p>
                            </div>
                        </div>
                    </div>
                </div>`
    });

    main.innerHTML = html

    //אנדרו - לא מצליח לרנדר הכל
    //השעה כבר מאוחרת.. צריך לעשות תנאי שהיוזר שעשה לוגאין יראה רק יצירות שהן ---לא--- (!) שלו
    // const images: any = document.querySelectorAll(".main__card__img");
    // let renderImg = ''

    // const elements = document.querySelectorAll('.main__card__author')
    // const prices = document.querySelectorAll('.main__card__price')

    // elements.forEach(element => {
    //     prices.forEach(price => {

    //         urls.forEach(url => {
    //             element.children.item(0).innerHTML = `${url.artName} #nftArts`
    //             element.children.item(1).innerHTML = `${url.author}'s Collection`
    //             price.children.item(0).innerHTML = `<label onclick="handleBuy('${url._id}', '${url.price}', '${url.ownerId}')">Click here to buy in</label> ${url.price}$`

    //         }


    //         )
    //     })
    // })

    // images.forEach(img => {

    //     urls.forEach(url => {
    //         renderImg = `url('${url.url}')`
    //     })

    //     img.style.backgroundImage = renderImg

    // })

}

async function handleBuy(artId, price, ownerId) {
    if(Object.keys(site.user).length < 1){
        alert("Log-in first!")
        return
    }
    if (price > site.user.fund) {
        alert("Not Enough Funds!")
    }
    else {
        await axios.patch('/users/buy-and-sell', { buyerId: site.user._id, price, ownerId })

        await axios.patch('/arts/buy-and-sell', { artId, buyerId: site.user._id })

        const { data } = await axios.get(`/users/log-user?loginEmail=${site.user.email}&loginPassword=${site.user.password}`)
        site.user = data.oldUser[0];
        localStorage.setItem('user', JSON.stringify(site.user));
        handleOnLoad();
    }
}


function handleAccountRedirect() {
    if (site.user.userName) window.location.href = "./account_page.html";
    else window.location.href = "./register.html"
}

async function handleAccountOption(ev) {
    const page = ev.target.id;
    let html = '';
    const main = document.querySelector('.main-account');
    switch (page) {
        case 'main':
            handleOnLoad()
            return;
        case 'settings':
            html = `<h2>Account Settings</h2>
            <form onsubmit="handleSettingsForm(event)">
                <input type="text" name="userName" value="${site.user.userName}">
                <input type="submit" value="update username">
            </form>
            <form onsubmit="handleSettingsForm(event)">
                <input type="text" name="email" value="${site.user.email}">
                <input type="submit" value="update email">
            </form>
            <form onsubmit="handleSettingsForm(event)">
                <input type="text" name="url" value="${site.user.url}">
                <input type="submit" value="update profile picture">
            </form>
            <form onsubmit="handleSettingsForm(event)">
                <label for="oldPassword">Old password</label>
                <input type="text" name="oldPassword" value="">
                <label for="password">New password</label>
                <input type="text" name="password" value="">
                <label for="password2">Confirm new password</label>
                <input type="text" name="password2" value="">
                <input type="submit" value="update password">
            </form>`
            break;
        case 'my art':
            const { data } = await axios.get(`/arts/get-user-art?userId=${site.user._id}`)
            site.arts = data;
            html = `<h1>My Art</h1>
                     <div class="art-grid">`
            data.forEach(art => {
                html += `<div class="art-grid__card">
                        <img src="${art.url}">
                        <h3>${art.artName}</h3>
                        <h4>by: ${art.author}</h4>`
                if (!art.forSale) {
                    html += `<button onclick="handleSale('${art._id}', event)">sell</button>`
                }
                else {
                    html += `<h5>item was put on sale for ${art.price} BTC</h5>
                            <button onclick="handleCancelSale('${art._id}')">Cancel Sale</button>`
                }

                html += `</div>`
            });

            html += `</div>`
            break;
        case 'create':
            html = `<h1>Add New Art!</h1>
                    <h3>use the form below to add a new art to your collection, the cost of adding a new art is 3 BTC</h3>
                    <h3>Funds: ${site.user.fund} BTC</h3>
                    <form onsubmit="handleAddArt(event)">
                        <label for="url">Copy Image URL to here:</label>
                        <input type="text" name="url">
                        <label for="name">Create a name for your Art:</label>
                        <input type="text" name="name">
                        <input type="submit">
                    </form>
                    `
            break;
        case 'sale':
            html = `<h1>These are the items you listed for sale</h1>`
            break;
    }
    main.innerHTML = html;
}

async function handleSettingsForm(ev) {
    ev.preventDefault()
    const toBeUpdated = ev.target[0].name
    const value = ev.target[0].value
    //console.log(toBeUpdated);
    if (toBeUpdated == 'password') {
        if (value == site.user.password) {
            if (ev.target[1].value == ev.target[2].value) {
                site.user[toBeUpdated] = ev.target[1].value;
                axios.patch('/users/update-user', { user: site.user });
                localStorage.setItem('user', JSON.stringify(site.user));
            }
            else {
                // add alert passwords do not match
            }
        }
        else {
            // add alert wrong password
        }
    }
    else {
        site.user[toBeUpdated] = value;
        axios.patch('/users/update-user', { user: site.user });
        localStorage.setItem('user', JSON.stringify(site.user));
    }

};

function handleSale(artId, ev) {
    const artToSale = site.arts.filter(art => art._id == artId)[0]
    const html = `<form class="art-grid__card" onsubmit="handleSaleForm(event,'${artToSale._id}')">
                        <img src="${artToSale.url}">
                        <h3>${artToSale.artName}</h3>
                        <h4>by: ${artToSale.author}</h4>
                        <label for="price">enter a price</label>
                        <input type="number" name="price" step=any></input>
                        <input type="submit" value="Sale"></input>
                        </form>`;

    ev.target.parentElement.outerHTML = html;
}

async function handleSaleForm(ev, artId) {
    ev.preventDefault()
    const price = ev.target.price.value
    await axios.patch('/arts/putArtOnSale', { price, artId })

    const fakeEvent = { target: { id: "my art" } }
    handleAccountOption(fakeEvent)
}

async function handleCancelSale(artId) {
    await axios.patch('/arts/cancelSale', { artId })

    const fakeEvent = { target: { id: "my art" } }
    handleAccountOption(fakeEvent)
}

async function handleAddArt(ev) {
    ev.preventDefault()
    const newArt = { artName: ev.target.name.value, url: ev.target.url.value, author: site.user.userName };
    await axios.post('/arts/add-art', { newArt, userId: site.user._id });
}

//sideBar

function handleStatusClick() {

    document.querySelector('.status-buttons').classList.toggle('toggle');

}

function handleOnSale() {

    const onSale = document.querySelector('.onSale')
    onSale.classList.toggle('hidden');

}






















