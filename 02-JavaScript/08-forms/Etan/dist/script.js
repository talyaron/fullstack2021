var form = document.querySelector('form');
var destination = document.querySelector('#end');
var p = document.createElement("p");
form.addEventListener("submit", handle);
function handle(ev) {
    ev.preventDefault();
    for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
        var field = _a[_i];
        console.log(field.value);
    }
    function destination(ev) {
        for (var _i = 0, _a = ev.target; _i < _a.length; _i++) {
            var field = _a[_i];
            if (field.value !== 'Log In')
                p.field.textContent = ev.target.value;
        }
        destination(ev);
    }
}
console.log(p);
