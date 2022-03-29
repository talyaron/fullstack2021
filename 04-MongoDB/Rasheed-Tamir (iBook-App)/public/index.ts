
let axios;
async function getBooks() {
    const { data } = await axios.get("/get-books");
    console.log(data);
    if (Array.isArray(data)) return data;
}

async function handleBooks() {
    const data = await this.getBooks();
    renderData(data);
}

function handleLoadBooks() {
    handleBooks();
}

function renderData(data: Array<any>) {
    let html = "";
    data.forEach((book) => {
        console.log(book.BookId)
        html += `
                <div id="book" class="book">
                <input  class="check" type="checkbox" id="${book.BookId}check1">
                <input  class="check" type="checkbox" id="${book.BookId}check2">
                <input  class="check" type="checkbox" id="${book.BookId}check3">
                <input  class="check" type="checkbox" id="${book.BookId}check4">
                <input  class="check" type="checkbox" id="${book.BookId}check5">

                    <div class="book__content">
                        <div class="book__content__pageFlip" id="page1">
                            <div class="book__content__pageFlip-back">
                            <img src="${book.firstPageImg}">
                            <label class="book__content__pageFlip-back-btn" for="${book.BookId}check1">
                                <<</label>
        
                            </div>
                            <div class="book__content__pageFlip-front">
                            <img id="cover" src="${book.coverImg}">
                            <label class="book__content__pageFlip-front-btn" for="${book.BookId}check1">Read</label>
                        </div>
                    </div>
                    <div class="book__content__pageFlip" id="page2">
                        <div class="book__content__pageFlip-back">
                            <img src="${book.secendPageImg}">
                            <label class="book__content__pageFlip-back-btn" for="${book.BookId}check2">
                                <<</label>
                        </div>
                        <div  class="book__content__pageFlip-front">
                            <h1> ${book.firstPageChapter}</h1>
                            <h2> ${book.firstPageHeadLine}</h2>
                            <p> ${book.firstPageContent}</p>
                            <label class="book__content__pageFlip-front-btn" for="${book.BookId}check2">>></label>
                        </div>
                    </div>
                    <div class="book__content__pageFlip" id="page3">
                    <div class="book__content__pageFlip-back">
                        <img src="${book.thirdPageImg}">
                        <label class="book__content__pageFlip-back-btn" for="${book.BookId}check3">
                            <<</label>
                    </div>
                    <div class="book__content__pageFlip-front">
                        <h1> ${book.secendPageChapter}</h1>
                        <h2> ${book.secendPageHeadLine}</h2>
                        <p>${book.secendPageContent}</p>
                        <label class="book__content__pageFlip-front-btn" for="${book.BookId}check3">>></label>
                    </div>
                </div>
                <div class="book__content__pageFlip" id="page4">
                    <div class="book__content__pageFlip-back">
                        <img src="${book.fourthPageImg}">
                        <label class="book__content__pageFlip-back-btn" for="${book.BookId}check4">
                            <<</label>
                    </div>
                    <div class="book__content__pageFlip-front">
                        <h1>  ${book.thirdPageChapter}</h1>
                        <h2> ${book.thirdPageHeadLine}</h2>
                        <p>${book.thirdPageContent}.</p>
                        <label class="book__content__pageFlip-front-btn" for="${book.BookId}check4">>></label>
                    </div>
                </div>
                <div class="book__content__pageFlip" id="page5">
                    <div class="book__content__pageFlip-back">
                        <img src="${book.backCoverImg}">
                        <label class="book__content__pageFlip-back-btn" for="${book.BookId}check5">
                            <<</label>
                    </div>
                    <div class="book__content__pageFlip-front">
                        <h1>  ${book.fourthPageChapter}</h1>
                        <h2> ${book.fourthPageHeadLine}</h2>
                        <p>${book.fourthPageContent}</p>
                        <label class="book__content__pageFlip-front-btn" for="${book.BookId}check5">>></label>
                </div>
            </div>
        </div>
        </div>`
    });
    const root = document.querySelector('#root');
    root.innerHTML = html;
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

