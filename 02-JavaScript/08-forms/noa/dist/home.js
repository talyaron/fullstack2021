var card1 = document.querySelector('.card1');
console.log(card1);
var data = {};
function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    var firstname = e.target.firstName.value;
    var lastname = e.target.lastName.value;
    var username = e.target.email.value;
    console.log(firstname);
    data = { firstname: firstname, lastname: lastname, username: username };
    card1.innerHTML =
        "\n   <div class=\"card\"\n   <div class=\"top\"></div>\n   \n   <div class=\"name\">\n   <h1> " + firstname + " " + lastname + "</h1>\n   <h2> " + username + "\n   \n   </div>\n   \n   </div>\n   \n   \n   \n   ";
}
