
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
        html += `
                <div id="book" class="book">
                <input  class="check" type="checkbox" id="check1">
                <input  class="check" type="checkbox" id="check2">
                <input  class="check" type="checkbox" id="check3">
                <input  class="check" type="checkbox" id="check4">
                <input  class="check" type="checkbox" id="check5">

                    <div class="book__content">
                        <div class="book__content__pageFlip" id="page1">
                            <div class="book__content__pageFlip-back">
                            <img src="${book.firstPageImg}">
                            <label class="book__content__pageFlip-back-btn" for="check1">
                                <<</label>
        
                            </div>
                            <div class="book__content__pageFlip-front">
                            <img id="cover" src="${book.coverImg}">
                            <label class="book__content__pageFlip-front-btn" id="glow" for="check1">Read</label>
                        </div>
                    </div>
                    <div class="book__content__pageFlip" id="page2">
                        <div class="book__content__pageFlip-back">
                            <img src="${book.secendPageImg}">
                            <label class="book__content__pageFlip-back-btn" for="check2">
                                <<</label>
                        </div>
                        <div  class="book__content__pageFlip-front">
                            <h1> ${book.firstPageChapter}</h1>
                            <h2> ${book.firstPageHeadLine}</h2>
                            <p> ${book.firstPageContent}</p>
                            <label class="book__content__pageFlip-front-btn" for="check2">>></label>
                        </div>
                    </div>
                    <div class="book__content__pageFlip" id="page3">
                    <div class="book__content__pageFlip-back">
                        <img src="${book.thirdPageImg}">
                        <label class="book__content__pageFlip-back-btn" for="check3">
                            <<</label>
                    </div>
                    <div class="book__content__pageFlip-front">
                        <h1> ${book.secendPageChapter}</h1>
                        <h2> ${book.secendPageHeadLine}</h2>
                        <p>${book.secendPageContent}</p>
                        <label class="book__content__pageFlip-front-btn" for="check3">>></label>
                    </div>
                </div>
                <div class="book__content__pageFlip" id="page4">
                    <div class="book__content__pageFlip-back">
                        <img src="${book.fourthPageImg}">
                        <label class="book__content__pageFlip-back-btn" for="check4">
                            <<</label>
                    </div>
                    <div class="book__content__pageFlip-front">
                        <h1>  ${book.thirdPageChapter}</h1>
                        <h2> ${book.thirdPageHeadLine}</h2>
                        <p>${book.thirdPageContent}.</p>
                        <label class="book__content__pageFlip-front-btn" for="check4">>></label>
                    </div>
                </div>
                <div class="book__content__pageFlip" id="page5">
                    <div class="book__content__pageFlip-back">
                        <img src="${book.backCoverImg}">
                        <label class="book__content__pageFlip-back-btn" for="check5">
                            <<</label>
                    </div>
                    <div class="book__content__pageFlip-front">
                        <h1>  ${book.fourthPageChapter}</h1>
                        <h2> ${book.fourthPageHeadLine}</h2>
                        <p>${book.fourthPageContent}</p>
                        <label class="book__content__pageFlip-front-btn" for="check5">>></label>
                </div>
            </div>
        </div>
        </div>`
    });
    const root = document.querySelector('#root');
    root.innerHTML = html;
}

