let axios;
async function getGames() {

    const { data } = await axios.get("/get-games");
    console.log(data);
    if (Array.isArray(data)) return data;
}

async function handleStore() {
    const data = await this.getGames();
    renderData(data);
}
async function handleErp() {
    const data = await this.getGames();
    renderErp(data);
}
function renderData(data: Array<any>) {
    let html = "";
    data.forEach(data => {
        html += `<div class="game">
            <div class="game__section-text">
        <h1>${data.title}</h1>
        <h3>${data.type}</h3>
        <p>${data.description}</p>
        <h4>${data.price}</h4>
        <button class="game__buy-btn" >Buy now</button>
        </div>
        
        <div class="game__section-img">  
        <img src="${data.img}"  alt="">
        </div>
        </div>`
    });
    const root = document.querySelector('#root');
    root.innerHTML = html;
}
function renderErp(data: Array<any>) {
    let html = "";
    data.forEach((data) => {
        html +=
            `<div>${data.title}</div>  
        <img src="${data.img}">
        <div>${data.type}</div>
        <div>${data.description}</div>
        <div>${data.price}</div>
        <div class="wrapper">
        <form class="erpForm" id="${data.id}" onsubmit="handleUpdateGame(event)">
        
        <input type="text" value="${data.title}" name="title" placeholder="game title">
        
        <input type="text" value="${data.price}" name="price" placeholder="game price">
        
        <input type="text" value="${data.description}" name="description" placeholder="game description">
        
        <input type="text" value="${data.img}" name="img" placeholder="game img">
        
        <select value="${data.type}" name="selectType" id="selectType">
            <option value="${data.type}" value disabled selected>Choose type</option>
            <option value="strategy">Strategy</option>
            <option value="shooter">Shooter</option>
            <option value="rpg">RPG</option>
            <option value="survival">Survival</option>
        </select>
        
        <input type="text" value="${data.id}" name="id" placeholder="game id">
        <button class="btn">UPDATE</button>
        </div>
        <div class="btnwrapper">
        <button class="btn" onclick="handleDelete('${data.id}')">Delete</button>
        </div>
        </form>
        </div>`
    });
    const root = document.querySelector('#root');
    root.innerHTML = html;
}

function handleLoadErp() {
    handleErp();
}
function handleLoadStore() {
    handleStore();
}

async function handleAddGame(ev) {
    ev.preventDefault();
    const title = ev.target.elements.title.value;
    const price = ev.target.elements.price.value;
    const description = ev.target.elements.description.value;
    const img = ev.target.elements.img.value;
    const type = ev.target.elements.selectType.value;
    const id = ev.target.elements.id.value;
    const { data } = await axios.post("/add-games", { title: title, price: price, description: description, img: img, type: type, id: id, ok: true });
    console.log({ data })
    renderErp(data);
    ev.target.reset();
}

async function handleDelete(id) {
    const { data } = await axios.post("/delete-games", { id, ok: true })
    console.log(data);
    renderErp(data);
}

async function handleUpdateGame(ev) {
    ev.preventDefault();
    const title = ev.target.elements.title.value;
    const price = ev.target.elements.price.value;
    const description = ev.target.elements.description.value;
    const img = ev.target.elements.img.value;
    const type = ev.target.elements.selectType.value;
    const id = ev.target.elements.id.value;
    const { data } = await axios.patch('/update-games', { title, price, description, img, type, id });
    const { ok, store } = data;
    if (ok) {
        renderErp(store);
    }

}

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", ev => {
            if ((<HTMLTextAreaElement>ev.target).id === "signupUsername" && (<HTMLTextAreaElement>ev.target).value.length > 0 && (<HTMLTextAreaElement>ev.target).value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

let modal = document.getElementById('singIN');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




