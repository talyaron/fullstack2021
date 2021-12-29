let el = document.getElementById('text').innerHTML
console.log(el)

i = 0;
function type() {
    i++;
    if (i <= el.length)
        document.getElementById("text").innerHTML = el.substr(0, i);

    setTimeout(type, 100);
}
type();

let el2 = document.getElementById('lorem-text').innerHTML
console.log(el2)

y = 0;
function type2() {
    y++;
    if (y <= el2.length)
        document.getElementById("lorem-text").innerHTML = el2.substr(0, y);

    setTimeout(type2, 100)
}
type2();


