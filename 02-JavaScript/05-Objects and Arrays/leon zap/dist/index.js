var inputItem = document.querySelector("#item");
var inputPrice = document.querySelector("#price");
var mybutton = document.querySelector(".btn-list");
var list = document.querySelector(".container");
mybutton.addEventListener("click", function (e) {
    if (inputText.value != "") {
        e.preventDefault();
        // create li
        var myLi = document.createElement("li");
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);
    }
});
