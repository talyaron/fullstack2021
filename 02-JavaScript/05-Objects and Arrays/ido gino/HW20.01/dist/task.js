var selectArray = document.getElementById('selectArray');
var input = document.getElementById('input');
var boxes = document.querySelectorAll('.main-show-box');
var movies = document.getElementById('movies');
var games = document.getElementById('movies');
var shoes = document.getElementById('movies');
var myhome = {
    objects: [
        {
            title: 'SHOES',
            value: ['nike', 'adidas']
        },
        {
            title: 'GAMES',
            value: ['fortnite', 'call of duty']
        },
        {
            title: 'MOVIES',
            value: ['spiderman', 'forest gamp']
        }
    ],
    addto: function (arrayName, add) {
        for (var i = 0; i < this.objects.length; i++) {
            if (arrayName == this.objects[i].title) {
                this.objects[i].value.push(add);
            }
        }
    },
    remove: function (arrayName, removeElm) {
        for (var i = 0; i < this.objects.length; i++) {
            if (arrayName == this.objects[i].title) {
                for (var x = 0; x < this.objects[i].value.length; x++) {
                    if (removeElm == this.objects[i].value[x]) {
                        this.objects[i].value.splice(x, 1);
                    }
                    else {
                        this.objects[i].value = this.objects[i].value;
                    }
                }
            }
        }
    }
};
console.log(Object.keys(myhome));
console.log(Object.keys(boxes));
console.log(myhome.objects);
function displayHome(ev) {
    ev.preventDefault();
    var arrayName;
    var add;
    var removeElm;
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.name !== "submit") {
            if (field.name == "listArrays") {
                arrayName = field.value;
            }
            else if (field.name == "inputAdd") {
                add = field.value;
            }
            else if (field.name == "inputRemove") {
                removeElm = field.value;
            }
        }
    }
    console.log(removeElm);
    console.log(add);
    console.log(arrayName);
    myhome.addto(arrayName, add);
    myhome.remove(arrayName, removeElm);
    creatCard(myhome.objects);
    checkFields(add, removeElm, arrayName);
}
function creatCard(objects) {
    for (var i = 0; i < objects.length; i++) {
        boxes[i].innerHTML = "<h2 class=\"main-show-box-head\">" + objects[i].title + "<h2/>  <p class=\"main-show-box-displayList\">" + objects[i].value + "<p/><br>";
    }
}
function checkFields(add, removeElm, arrayName) {
    if (add !== "" && removeElm !== "") {
        alert("Can't add and remove at the same time!");
    }
    if (arrayName == "empty") {
        alert('You must choose catagory!');
    }
}
