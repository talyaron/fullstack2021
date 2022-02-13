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
        localStorage.setItem('title', JSON.stringify(this.titleArray));
    },
    renderAllTitle: function (titleBox) {
        this.render(this.titleArray, titleBox);
    },
    render: function (list, titleBox) {
        var html = '';
        list.forEach(function (titleItem) {
            if (titleItem.language === 'hebrew') {
                html += "<div class=\"card\"><h1 id=\"cardHebrewId\" class=\"card--hebrewCard\">" + titleItem.text + "</h1></div></div>";
                document.getElementById('cardHebrewId').style.color = "" + titleItem.color;
            }
            else {
                html += "<div class=\"card\"><h1 class=\"card--englishCard\">" + titleItem.text + "</h1></div></div>";
            }
        });
        titleBox.innerHTML = html;
    }
};
function handleTitle(e) {
    e.preventDefault();
    var text = e.target.elements.titleText.value;
    var size = e.target.elements.fontSize.value;
    var color = e.target.elements.colorTitle.value;
    var language = e.target.elements.language.value;
    title.addTitle({ text: text, size: size, color: color, language: language });
    var titleBox = document.getElementById('titleBox');
    title.renderAllTitle(titleBox);
    e.target.reset();
}
function handleColor(e) {
    var color = e.target.value;
    localStorage.setItem('colorLayoy', color);
}
;
function handleGetData() {
    var color = localStorage.getItem('colorLayoy');
    var container = document.querySelectorAll('.container');
    paintBody(container, color);
}
;
function paintBody(container, color) {
    container.forEach(function (element) {
        element.style.background = color;
    });
}
;
