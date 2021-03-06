interface Title {
    titleArray: Array<TitleInfo>;
    addTitle(list: Array<TitleInfo>);
    renderAllTitle(titleBox: any);
    render(list, titleBox);
}

interface TitleInfo {
    text: string;
    id: string;
    size: number;
    color: string;
    language: string;
};

const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

let title: Title = {
    titleArray: [],
    addTitle(list) {
        const id = uid();
        this.titleArray.push({ ...list, id })
        localStorage.setItem('title', JSON.stringify(this.titleArray))
    },
    renderAllTitle(titleBox) {
        this.render(this.titleArray, titleBox)
    },
    render(list, titleBox) {

        let html = '';
        list.forEach(titleItem => {

            if (titleItem.language === 'hebrew') {
                html += `<div class="card"><h1 id="cardHebrewId" class="card--hebrewCard">${titleItem.text}</h1></div></div>`
                document.getElementById('cardHebrewId').style.color = `${titleItem.color}`;
                
            } else  {
                html += `<div class="card"><h1 class="card--englishCard">${titleItem.text}</h1></div></div>`
            }


        });

        titleBox.innerHTML = html;

    },
}











function handleTitle(e) {
    e.preventDefault();

    const text = e.target.elements.titleText.value;
    const size = e.target.elements.fontSize.value;
    const color = e.target.elements.colorTitle.value;
    const language = e.target.elements.language.value;

    title.addTitle({ text, size, color, language })

    const titleBox = document.getElementById('titleBox');
    title.renderAllTitle(titleBox);

    e.target.reset();
}







function handleColor(e) {
    const color = e.target.value;
    localStorage.setItem('colorLayoy', color);
};

function handleGetData() {
    const color = localStorage.getItem('colorLayoy');

    const container = document.querySelectorAll('.container');
    paintBody(container, color);
};

function paintBody(container, color) {

    container.forEach(element => {
        element.style.background = color
    });
};


 