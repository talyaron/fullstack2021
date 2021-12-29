let text = `Michael Dubovik.....`

i = 0;
function type() {
    i++;
    if (i <= text.length)
        document.getElementById("text").innerHTML = text.substr(0, i);

    setTimeout(type, 50);
}
type();