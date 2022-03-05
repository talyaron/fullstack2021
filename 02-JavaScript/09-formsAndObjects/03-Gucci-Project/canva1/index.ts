interface Title {
    titleArray: Array<TitleInfo>;
    addTitle(list: Array<TitleInfo>);
    renderAllTitle(titleBox: any, titleContainer: any);
    render(list, titleBox, titleContainer);
    getTitleData();
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
        localStorage.setItem('titleInBox2', JSON.stringify(this.titleArray))
    },
    renderAllTitle(titleBox, titleContainer) {

        this.render(this.titleArray, titleBox, titleContainer)
    },
    render(list, titleBox, titleContainer) {

        let html = '';
        list.forEach(titleItem => {

            if (titleItem.language === 'hebrew') {
                html += `<div class="card"><h1 style="color:${titleItem.color}; font-size:${titleItem.size}rem;" class="card--hebrewCard">${titleItem.text}</h1></div></div>`
            } else {
                html += `<div class="card"><h1 style="color:${titleItem.color}; font-size:${titleItem.size}rem;" class="card--englishCard">${titleItem.text}</h1></div></div>`
            }
        });

        if (titleContainer) {
            titleContainer.innerHTML = html;

        } else {
            titleBox.innerHTML = html;
        }
    },
    getTitleData() {
        this.titleArray = JSON.parse(localStorage.getItem('titleInBox2'));
        const titleContainer = document.getElementById('titleContainer');
        const titleBox = document.getElementById('titleBox');
        this.renderAllTitle(titleBox, titleContainer);
    },
}

function handleTitle(e) {
    e.preventDefault();

    try {
        const text = e.target.elements.titleText.value;
        const size = e.target.elements.fontSize.valueAsNumber;
        const color = e.target.elements.colorTitle.value;
        const language = e.target.elements.language.value;

        const titleContainer = document.getElementById('titleContainer');
        const titleBox = document.getElementById('titleBox');

        if (!text || !size) throw new Error("something is wrong in handleTitle");


        switch (size) {
            case 1:
                title.addTitle({ text, size, color, language })
                title.renderAllTitle(titleBox, titleContainer);
                break;

            case 2:
                title.addTitle({ text, size, color, language })
                title.renderAllTitle(titleBox, titleContainer);
                break;

            case 3:
                title.addTitle({ text, size, color, language })
                title.renderAllTitle(titleBox, titleContainer);
                break;

            default:
                alert('font size must be only between 1-3')
        }

    } catch (error) {
        console.error(error)
    }

    e.target.reset();
}


function handleColor(e) {

    try {
        const color = e.target.value;
        localStorage.setItem('colorLayoy', color);
        if (!color) throw new Error("Something went wrong in handleColor function");

    } catch (error) {
        console.error(error)
    }

};

function handleGetData() {
    const color = localStorage.getItem('colorLayoy');
    const container = document.querySelectorAll('.container');
    paintBody(container, color);

    title.getTitleData();
    btnContentObject.getBtnCtnData();
    renderImageCanva();
};

function paintBody(container, color) {

    container.forEach(element => {
        element.style.background = color
    });
};


interface BtnOrContent {
    btnCtnArray: Array<BtnCtn>;
    addBtnCtn(listBtnCtn: Array<BtnCtn>);
    renderAll(indexBox: any, canvaBox: any);
    render(indexBox: any, canvaBox: any, lista: Array<BtnCtn>);
    getBtnCtnData();
}

interface BtnCtn {
    text: string;
    id: string;
    font: number;
    color: string;
    background: string;
    language: string;
    type: string;
}

let btnContentObject: BtnOrContent = {
    btnCtnArray: [],
    addBtnCtn(listBtnCtn: Array<BtnCtn>) {

        const id = uid();
        this.btnCtnArray.push({ ...listBtnCtn, id });
        localStorage.setItem('btnCtn1', JSON.stringify(this.btnCtnArray))
    },
    renderAll(indexBox: any, canvaBox: any) {
        this.render(indexBox, canvaBox, this.btnCtnArray)
    },
    render(indexBox: any, canvaBox: any, lista) {

        let html = '';

        lista.forEach(item => {


            switch (item.type) {
                case 'button':
                    if (item.language === 'hebrew') {
                        html = `<div class="buttonCanva"><button class="button" style="font-size:${item.font}rem; background-color:${item.background};"><a style="color:${item.color}; text-decoration: none;" href="http://google.com">${item.text}</a></button></div>`
                    } else {
                        html = `<div class="buttonCanva"><button class="button" style="font-size:${item.font}rem; background-color:${item.background};"><a style="color:${item.color}; text-decoration: none;" href="http://google.com">${item.text}</a></button></div>`
                    }
                    break;

                case 'content':
                    if (item.language === 'hebrew') {
                        html = `<div class="buttonCanva"><button style="font-size:${item.font}rem; background-color:${item.background};">${item.text}</button></div>`
                    } else {
                        html = `<div class="buttonCanva"><button style="font-size:${item.font}rem; background-color:${item.background};">${item.text}</button></div>`
                    }
                    break;
            }
        });
        canvaBox.innerHTML = html;
    },
    getBtnCtnData() {

        try {
            this.btnCtnArray = JSON.parse(localStorage.getItem('btnCtn1'));
            const rootBtnCtnCanva = document.getElementById('btnOrCtnCanva');
            const buttonContentBoxIndex = document.getElementById('buttonContentBoxIndex');
            this.renderAll(buttonContentBoxIndex, rootBtnCtnCanva);

            if (!rootBtnCtnCanva || !buttonContentBoxIndex) throw new Error("Something went wrong in getBtnCtnData function");

        } catch (error) {
            console.error(error)
        }
    },
}

function handleSelectButtonOrContent(e) {

    try {
        const type = e.target.value;
        const buttonContentBoxIndex = document.getElementById('buttonContentBoxIndex');

        if (!type || !buttonContentBoxIndex) throw new Error("Something went wrong in handleSelectButtonOrContent function");


        if (type === 'button') {
            renderBtn(buttonContentBoxIndex, type)
        } else {
            renderCtn(buttonContentBoxIndex, type);
        }
    } catch (error) {
        console.error(error)
    }


};

function renderBtn(buttonContentBoxIndex, type) {

    buttonContentBoxIndex.innerHTML = `<form id="btn" onsubmit="handleBtn(event, '${type}')">
    <p>Please Enter your button's text here</p>
    <input type="text" name="btnText" placeholder="Please Enter text" required>
    <p>Please Enter your fonts' size  only in numbers(rem)</p>
    <input type="number" name="fontSizeBtn" placeholder="Please Enter Font Size" required>
    <p>Please Enter the color of the fonts' button</p>
    <input class="btnColor" type="Color" name="colorBtn" placeholder="Please Enter Button text Color"
    required>
    <p>Please Enter your button's background color</p>
    <input class="btnColor" type="color" name="colorBgBtn" placeholder="Please Enter Button Background Color"
    required>

    <select name="languageBtn" id="">
        <option value="" disabled selected>Please select language</option>
        <option value="hebrew">Hebrew</option>
        <option value="english">English</option>
    </select>
    
    <input type="submit" value="Please Create a Button" name="submit">
    </form>`
};

function renderCtn(buttonContentBoxIndex, type) {

    buttonContentBoxIndex.innerHTML = `<form id="ctn" onsubmit="handleContent(event, '${type}')">
    <input type="text" name="ctnText" placeholder="Please Enter text" id="ctnBox" required>
    <p>Please Enter your fonts' size  only in numbers(rem)</p>
    <input type="number" name="fontSizeCtn" placeholder="Please Enter Font Size" required>
    <p>Please Enter the color of the fonts' button</p>
    <input class="ctnColor" type="Color" name="colorCtn" placeholder="Please Enter Button text Color"
    required>

    <select name="languageCtn">
        <option value="" disabled selected>Please select language</option>
        <option value="hebrew">Hebrew</option>
        <option value="english">English</option>
    </select>
    
    <input type="submit" value="Create Content" name="submit">
    </form>`
};


function handleBtn(e, type) {
    e.preventDefault();

    const text = e.target.elements.btnText.value;
    const font = e.target.elements.fontSizeBtn.valueAsNumber;
    const color = e.target.elements.colorBtn.value;
    const background = e.target.elements.colorBgBtn.value;
    const language = e.target.elements.languageBtn.value;

    if (font > 0 && font < 4) {
        btnContentObject.addBtnCtn({ text, font, color, background, language, type })

        const rootBtnCtnCanva = document.getElementById('btnOrCtnCanva');
        const buttonContentBoxIndex = document.getElementById('buttonContentBoxIndex');
        btnContentObject.renderAll(buttonContentBoxIndex, rootBtnCtnCanva);
    } else {
        alert('please insert font size as an integer between 1 and 3')
    }


    e.target.reset();
}

function handleContent(e, type) {

    e.preventDefault();

    try {
        const text = e.target.elements.ctnText.value;
        const font = e.target.elements.fontSizeCtn.valueAsNumber;
        const color = e.target.elements.colorCtn.value;
        const background = 'transparent';
        const language = e.target.elements.languageCtn.value;

        const rootBtnCtnCanva = document.getElementById('btnOrCtnCanva');
        const buttonContentBoxIndex = document.getElementById('buttonContentBoxIndex');

        switch (font) {
            case 1:
                btnContentObject.addBtnCtn({ text, font, color, background, language, type })
                btnContentObject.renderAll(buttonContentBoxIndex, rootBtnCtnCanva);
                break;

            case 2:
                btnContentObject.addBtnCtn({ text, font, color, background, language, type })
                btnContentObject.renderAll(buttonContentBoxIndex, rootBtnCtnCanva);
                break;

            default:
                alert('font size only between 1-2');
        }

        if (!text || !font || !color || !background || !language) throw new Error("Something went wrong in handleContent function");

    } catch (error) {
        console.error(error)
    }

    e.target.reset();
}


function handlePicture() {

    const reader = new FileReader();
    reader.readAsDataURL(document.getElementById("pic").files[0]);

    reader.onloadend = function () {
        let base64data = reader.result;
        function b64EncodeUnicode(str) {
            return btoa(encodeURIComponent(str));
        };
        localStorage.setItem("pic", b64EncodeUnicode(base64data))
    };

    const picOutput = document.getElementById('imgBox');
    const picIntput = document.getElementById('pic');
    picOutput.style.backgroundImage = `url('${URL.createObjectURL(picIntput.files[0])}')`;
}

function renderImageCanva() {
    function UnicodeDecodeB64(str) {
        return decodeURIComponent(atob(str));
    };
    let b64 = localStorage.getItem("pic");
    let blob = UnicodeDecodeB64(b64)
    let image = new Image();
    image.src = blob
    const imgContainer = document.getElementById('imgContainer');

    imgContainer.appendChild(image);
}













