//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
//comming from user
var searchTerm = 'jf';
var regexAE = /Ae/;
var regexAE2 = new RegExp(searchTerm, 'i');
var string = 'dfj hksdfs jf sdfh werdfhfdh dfhae dsh gkj gjkh djkf';
if (regexAE2.test(string)) {
    console.log("we have \"" + searchTerm + "\" in string");
}
else {
    console.log("we dont have \"" + searchTerm + "\" in string");
}
if (string.match(regexAE2)) {
    console.log("we have \"" + searchTerm + "\" in string");
}
else {
    console.log("we dont have \"" + searchTerm + "\" in string");
}
function handleSearch(ev) {
    var searchTerm = ev.target.value;
    var regex = new RegExp(searchTerm, 'i');
    var root = document.querySelector('#root');
    if (regex.test(string)) {
        root.innerHTML = searchTerm + " exists in string";
        root.style.backgroundColor = 'green';
    }
    else {
        root.innerHTML = searchTerm + " does not exist in string";
        root.style.backgroundColor = 'red';
    }
}
