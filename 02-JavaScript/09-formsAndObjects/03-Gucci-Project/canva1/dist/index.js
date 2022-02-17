var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
;
var uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
var title = {
    titleArray: [],
    addTitle: function (list) {
        var id = uid();
        this.titleArray.push(__assign(__assign({}, list), { id: id }));
        localStorage.setItem('titleInBox2', JSON.stringify(this.titleArray));
    },
    renderAllTitle: function (titleBox, titleContainer) {
        this.render(this.titleArray, titleBox, titleContainer);
    },
    render: function (list, titleBox, titleContainer) {
        var html = '';
        list.forEach(function (titleItem) {
            if (titleItem.language === 'hebrew') {
                html += "<div class=\"card\"><h1 style=\"color:" + titleItem.color + "; font-size:" + titleItem.size + "rem;\" class=\"card--hebrewCard\">" + titleItem.text + "</h1></div></div>";
            }
            else {
                html += "<div class=\"card\"><h1 style=\"color:" + titleItem.color + "; font-size:" + titleItem.size + "rem;\" class=\"card--englishCard\">" + titleItem.text + "</h1></div></div>";
            }
        });
        if (titleContainer) {
            titleContainer.innerHTML = html;
        }
        else {
            titleBox.innerHTML = html;
        }
    },
    getTitleData: function () {
        this.titleArray = JSON.parse(localStorage.getItem('titleInBox2'));
        var titleContainer = document.getElementById('titleContainer');
        var titleBox = document.getElementById('titleBox');
        this.renderAllTitle(titleBox, titleContainer);
    }
};
function handleTitle(e) {
    e.preventDefault();
    try {
        var text = e.target.elements.titleText.value;
        var size = e.target.elements.fontSize.valueAsNumber;
        var color = e.target.elements.colorTitle.value;
        var language = e.target.elements.language.value;
        var titleContainer = document.getElementById('titleContainer');
        var titleBox = document.getElementById('titleBox');
        if (!text || !size)
            throw new Error("something is wrong in handleTitle");
        switch (size) {
            case 1:
                title.addTitle({ text: text, size: size, color: color, language: language });
                title.renderAllTitle(titleBox, titleContainer);
                break;
            case 2:
                title.addTitle({ text: text, size: size, color: color, language: language });
                title.renderAllTitle(titleBox, titleContainer);
                break;
            case 3:
                title.addTitle({ text: text, size: size, color: color, language: language });
                title.renderAllTitle(titleBox, titleContainer);
                break;
            default:
                alert('font size must be only between 1-3');
        }
    }
    catch (error) {
        console.error(error);
    }
    e.target.reset();
}
function handleColor(e) {
    try {
        var color = e.target.value;
        localStorage.setItem('colorLayoy', color);
        if (!color)
            throw new Error("Something went wrong in handleColor function");
    }
    catch (error) {
        console.error(error);
    }
}
;
function handleGetData() {
    var color = localStorage.getItem('colorLayoy');
    var container = document.querySelectorAll('.container');
    paintBody(container, color);
    title.getTitleData();
    btnContentObject.getBtnCtnData();
    renderImageCanva();
}
;
function paintBody(container, color) {
    container.forEach(function (element) {
        element.style.background = color;
    });
}
;
var btnContentObject = {
    btnCtnArray: [],
    addBtnCtn: function (listBtnCtn) {
        var id = uid();
        this.btnCtnArray.push(__assign(__assign({}, listBtnCtn), { id: id }));
        localStorage.setItem('btnCtn1', JSON.stringify(this.btnCtnArray));
    },
    renderAll: function (indexBox, canvaBox) {
        this.render(indexBox, canvaBox, this.btnCtnArray);
    },
    render: function (indexBox, canvaBox, lista) {
        var html = '';
        lista.forEach(function (item) {
            switch (item.type) {
                case 'button':
                    if (item.language === 'hebrew') {
                        html = "<div class=\"buttonCanva\"><button class=\"button\" style=\"font-size:" + item.font + "rem; background-color:" + item.background + ";\"><a style=\"color:" + item.color + "; text-decoration: none;\" href=\"http://google.com\">" + item.text + "</a></button></div>";
                    }
                    else {
                        html = "<div class=\"buttonCanva\"><button class=\"button\" style=\"font-size:" + item.font + "rem; background-color:" + item.background + ";\"><a style=\"color:" + item.color + "; text-decoration: none;\" href=\"http://google.com\">" + item.text + "</a></button></div>";
                    }
                    break;
                case 'content':
                    if (item.language === 'hebrew') {
                        html = "<div class=\"buttonCanva\"><button style=\"font-size:" + item.font + "rem; background-color:" + item.background + ";\">" + item.text + "</button></div>";
                    }
                    else {
                        html = "<div class=\"buttonCanva\"><button style=\"font-size:" + item.font + "rem; background-color:" + item.background + ";\">" + item.text + "</button></div>";
                    }
                    break;
            }
        });
        canvaBox.innerHTML = html;
    },
    getBtnCtnData: function () {
        try {
            this.btnCtnArray = JSON.parse(localStorage.getItem('btnCtn1'));
            var rootBtnCtnCanva = document.getElementById('btnOrCtnCanva');
            var buttonContentBoxIndex = document.getElementById('buttonContentBoxIndex');
            this.renderAll(buttonContentBoxIndex, rootBtnCtnCanva);
            if (!rootBtnCtnCanva || !buttonContentBoxIndex)
                throw new Error("Something went wrong in getBtnCtnData function");
        }
        catch (error) {
            console.error(error);
        }
    }
};
function handleSelectButtonOrContent(e) {
    try {
        var type = e.target.value;
        var buttonContentBoxIndex = document.getElementById('buttonContentBoxIndex');
        if (!type || !buttonContentBoxIndex)
            throw new Error("Something went wrong in handleSelectButtonOrContent function");
        if (type === 'button') {
            renderBtn(buttonContentBoxIndex, type);
        }
        else {
            renderCtn(buttonContentBoxIndex, type);
        }
    }
    catch (error) {
        console.error(error);
    }
}
;
function renderBtn(buttonContentBoxIndex, type) {
    buttonContentBoxIndex.innerHTML = "<form id=\"btn\" onsubmit=\"handleBtn(event, '" + type + "')\">\n    <p>Please Enter your button's text here</p>\n    <input type=\"text\" name=\"btnText\" placeholder=\"Please Enter text\" required>\n    <p>Please Enter your fonts' size  only in numbers(rem)</p>\n    <input type=\"number\" name=\"fontSizeBtn\" placeholder=\"Please Enter Font Size\" required>\n    <p>Please Enter the color of the fonts' button</p>\n    <input class=\"btnColor\" type=\"Color\" name=\"colorBtn\" placeholder=\"Please Enter Button text Color\"\n    required>\n    <p>Please Enter your button's background color</p>\n    <input class=\"btnColor\" type=\"color\" name=\"colorBgBtn\" placeholder=\"Please Enter Button Background Color\"\n    required>\n\n    <select name=\"languageBtn\" id=\"\">\n        <option value=\"\" disabled selected>Please select language</option>\n        <option value=\"hebrew\">Hebrew</option>\n        <option value=\"english\">English</option>\n    </select>\n    \n    <input type=\"submit\" value=\"Please Create a Button\" name=\"submit\">\n    </form>";
}
;
function renderCtn(buttonContentBoxIndex, type) {
    buttonContentBoxIndex.innerHTML = "<form id=\"ctn\" onsubmit=\"handleContent(event, '" + type + "')\">\n    <input type=\"text\" name=\"ctnText\" placeholder=\"Please Enter text\" id=\"ctnBox\" required>\n    <p>Please Enter your fonts' size  only in numbers(rem)</p>\n    <input type=\"number\" name=\"fontSizeCtn\" placeholder=\"Please Enter Font Size\" required>\n    <p>Please Enter the color of the fonts' button</p>\n    <input class=\"ctnColor\" type=\"Color\" name=\"colorCtn\" placeholder=\"Please Enter Button text Color\"\n    required>\n\n    <select name=\"languageCtn\">\n        <option value=\"\" disabled selected>Please select language</option>\n        <option value=\"hebrew\">Hebrew</option>\n        <option value=\"english\">English</option>\n    </select>\n    \n    <input type=\"submit\" value=\"Create Content\" name=\"submit\">\n    </form>";
}
;
function handleBtn(e, type) {
    e.preventDefault();
    var text = e.target.elements.btnText.value;
    var font = e.target.elements.fontSizeBtn.valueAsNumber;
    var color = e.target.elements.colorBtn.value;
    var background = e.target.elements.colorBgBtn.value;
    var language = e.target.elements.languageBtn.value;
    if (font > 0 && font < 4) {
        btnContentObject.addBtnCtn({ text: text, font: font, color: color, background: background, language: language, type: type });
        var rootBtnCtnCanva = document.getElementById('btnOrCtnCanva');
        var buttonContentBoxIndex = document.getElementById('buttonContentBoxIndex');
        btnContentObject.renderAll(buttonContentBoxIndex, rootBtnCtnCanva);
    }
    else {
        alert('please insert font size as an integer between 1 and 3');
    }
    e.target.reset();
}
function handleContent(e, type) {
    e.preventDefault();
    try {
        var text = e.target.elements.ctnText.value;
        var font = e.target.elements.fontSizeCtn.valueAsNumber;
        var color = e.target.elements.colorCtn.value;
        var background = 'transparent';
        var language = e.target.elements.languageCtn.value;
        var rootBtnCtnCanva = document.getElementById('btnOrCtnCanva');
        var buttonContentBoxIndex = document.getElementById('buttonContentBoxIndex');
        switch (font) {
            case 1:
                btnContentObject.addBtnCtn({ text: text, font: font, color: color, background: background, language: language, type: type });
                btnContentObject.renderAll(buttonContentBoxIndex, rootBtnCtnCanva);
                break;
            case 2:
                btnContentObject.addBtnCtn({ text: text, font: font, color: color, background: background, language: language, type: type });
                btnContentObject.renderAll(buttonContentBoxIndex, rootBtnCtnCanva);
                break;
            default:
                alert('font size only between 1-2');
        }
        if (!text || !font || !color || !background || !language)
            throw new Error("Something went wrong in handleContent function");
    }
    catch (error) {
        console.error(error);
    }
    e.target.reset();
}
function handlePicture() {
    var reader = new FileReader();
    reader.readAsDataURL(document.getElementById("pic").files[0]);
    reader.onloadend = function () {
        var base64data = reader.result;
        function b64EncodeUnicode(str) {
            return btoa(encodeURIComponent(str));
        }
        ;
        localStorage.setItem("pic", b64EncodeUnicode(base64data));
    };
    var picOutput = document.getElementById('imgBox');
    var picIntput = document.getElementById('pic');
    picOutput.style.backgroundImage = "url('" + URL.createObjectURL(picIntput.files[0]) + "')";
}
function renderImageCanva() {
    function UnicodeDecodeB64(str) {
        return decodeURIComponent(atob(str));
    }
    ;
    var b64 = localStorage.getItem("pic");
    var blob = UnicodeDecodeB64(b64);
    var image = new Image();
    image.src = blob;
    var imgContainer = document.getElementById('imgContainer');
    imgContainer.appendChild(image);
}
