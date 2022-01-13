function handleIdCard(e) {
    e.preventDefault();
    var object = {};
    for (var _i = 0, _a = e.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.type !== 'submit') {
            if (field.type === 'number') {
                object[field.name] = field.valueAsNumber;
            }
            else {
                object[field.name] = field.value;
            }
        }
    }
    createCard(object);
}
function createCard(cardObject) {
    var cardText = "<div id=\"printCard\">\n\n        <div class=\"firstRow\"></div>\n\n        <div class=\"secondRow\">\n            <div></div>\n            <div id=\"display_image\"></div>\n            <div class=\"thirdColumn\">\n                <div></div>\n                <div class=\"cardName\">\n                <h2>" + cardObject.firstName + " " + cardObject.lastName + "</h2>\n                <h3>Creative Manager</h3>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"thirdRow\">\n        <div></div>\n        \n            <div class=\"info\">\n            <h3><b>ID No</b></h3>\n            <h3><b>" + cardObject.idNumber + "</b></h3>\n            <div class=\"infoBottom\">\n            <h3><b>D.O.B</b></h3>\n            " + cardObject.month + "/" + cardObject.day + "/" + cardObject.year + "\n            </div>\n            </div>\n\n            <div class=\"info\">\n            <h3><b>Gender</b></h3>\n            <h3>" + cardObject.gender + "</h3> \n            <div class=\"infoBottom\">\n            <h3><b>Expire Date</b></h3>\n            " + cardObject.month + "/" + cardObject.day + "/" + (cardObject.year + 1) + "\n            </div>\n            </div>\n\n            <div class=\"barcode\">\n            <h3  style=\"color: #9c9c9c;\">Your Signature</h3>\n            <h3><b>Yours Sincerely</b></h3>\n            <img src=\"barcode.png\" alt=\"\"></div>\n\n            <div></div>\n            \n        </div>";
    document.getElementById('printCardPreview').innerHTML = cardText;
}
var image_input = document.querySelector("#image_input");
var uploaded_image = "";
image_input.addEventListener("change", function () {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = "url(" + uploaded_image + ")";
    });
    reader.readAsDataURL(this.files[0]);
});
