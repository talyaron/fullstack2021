
let axios;
// async function getBooks() {

//     const { data } = await axios.get("/get-books");
//     // console.log(data);
//     if (Array.isArray(data)) return data;
// }



async function renderByid(id, domElement) {
    const { data } = await axios.get("/get-books");
    const filterById = data
    console.log(filterById);
    
    renderBooks(filterById, domElement);
  }

function renderBooks(data:Array<any>, domElement) {
    let html = '';
    console.log(data);
    
   data.forEach(book => {
        html+=
        `<input type="checkbox" id="first-check1">
        <input type="checkbox" id="first-check2">
        <input type="checkbox" id="first-check3">
        <input type="checkbox" id="first-check4">
        <input type="checkbox" id="first-check5">
        <input type="checkbox" id="secend-check1">
        <input type="checkbox" id="secend-check2">
        <input type="checkbox" id="secend-check3">
        <input type="checkbox" id="secend-check4">
        <input type="checkbox" id="secend-check5">

        <div class="book__content">
            <div class="book__content__pageFlip" id="first-page1">
                <div class="book__content__pageFlip-back">
                    <img src="${book.firstPageImg}">
                    <label class="book__content__pageFlip-back-btn" for="first-check1">
                        <<</label>

                </div>
                <div class="book__content__pageFlip-front">
                    <img id="cover" src="${book.coverImg}">
                    <label class="book__content__pageFlip-front-btn" id="glow" for="first-check1">Read</label>
                </div>
            </div>
            <div class="book__content__pageFlip" id="first-page2">
                <div class="book__content__pageFlip-back">
                    <img src="${book.secendPageImg}">
                    <label class="book__content__pageFlip-back-btn" for="first-check2">
                        <<</label>
                </div>
                <div  class="book__content__pageFlip-front">
                    <h1> ${book.firstPageChapter}</h1>
                    <h2> ${book.firstPageHeadLine}</h2>
                    <p> ${book.firstPageContent}</p>
                    <label class="book__content__pageFlip-front-btn" for="first-check2">>></label>
                </div>
            </div>
            <div class="book__content__pageFlip" id="first-page3">
            <div class="book__content__pageFlip-back">
                <img src="${book.thirdPageImg}">
                <label class="book__content__pageFlip-back-btn" for="first-check3">
                    <<</label>
            </div>
            <div class="book__content__pageFlip-front">
                <h1> ${book.secendPageChapter}</h1>
                <h2> ${book.secendPageHeadLine}</h2>
                <p>${book.secendPageContent}</p>
                <label class="book__content__pageFlip-front-btn" for="first-check3">>></label>
            </div>
        </div>
        <div class="book__content__pageFlip" id="first-page4">
            <div class="book__content__pageFlip-back">
                <img src="${book.fourthPageImg}">
                <label class="book__content__pageFlip-back-btn" for="first-check4">
                    <<</label>
            </div>
            <div class="book__content__pageFlip-front">
                <h1>  ${book.thirdPageChapter}</h1>
                <h2> ${book.thirdPageHeadLine}</h2>
                <p>${book.thirdPageContent}.</p>
                <label class="book__content__pageFlip-front-btn" for="first-check4">>></label>
            </div>
        </div>
        <div class="book__content__pageFlip" id="first-page5">
            <div class="book__content__pageFlip-back">
                <img src="${book.backCoverImg}">
                <label class="book__content__pageFlip-back-btn" for="first-check5">
                    <<</label>
            </div>
            <div class="book__content__pageFlip-front">
                <h1>  ${book.fourthPageChapter}</h1>
                <h2> ${book.fourthPageHeadLine}</h2>
                <p>${book.fourthPageContent}</p>
                <label class="book__content__pageFlip-front-btn" for="first-check5">>></label>
            </div>
        </div>
    </div>
</div>`
    });
    domElement.innerHTML = html;
}

const firstBook = document.getElementById("firstBook");
const secendBook = document.getElementById("secendBook");
const thirdBook = document.getElementById("thirdBook");
const fourthBook = document.getElementById("fourthBook");

renderByid("firstBook",firstBook);
renderByid("secendBook",secendBook);
renderByid("thirdBook",thirdBook);
renderByid("fourthBook",fourthBook);
