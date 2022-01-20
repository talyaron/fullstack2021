var home = {
    books: ['gmara', 'more-nevuchim', 'the death of the west'],
    cloths: ['shirt', 'coat', 'pents', "shoos"],
    movies: ['the usual suspect', 'shawshank', 'snatch', "lock stock"],
    pushFunction: function (value, name) {
        console.log(value);
        console.log(name);
        this[name].push(value);
        console.log(this);
    }
};
function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    for (var _i = 0, _a = event.target; _i < _a.length; _i++) {
        var field = _a[_i];
        if (field.name !== 'submit') {
            switch (field.value) {
                case '':
                    alert('Please fill all fields');
                    return;
                    break;
                default:
                    home.pushFunction(field.value, field.name);
                    break;
            }
        }
    }
}
function handleRemove(event) {
    event.preventDefault();
    console.log(event);
    home.books.pop();
    home.cloths.pop();
    home.movies.pop();
    console.log(home);
}
for (var item in home) {
    if (typeof home[item] !== "function") {
        var displayDom = document.querySelector(".render");
        displayDom.innerHTML += "" + home[item];
    }
}
