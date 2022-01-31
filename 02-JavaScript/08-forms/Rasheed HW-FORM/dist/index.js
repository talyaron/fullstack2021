var creat = document.getElementById("creat");
creat.addEventListener("click", cardDisplay);
function cardDisplay(ev) {
    ev.preventDefault();
    var card = document.querySelector('.card-container');
    card.style.opacity = '1';
    var form = document.querySelector('.form-container');
    form.style.opacity = '0';
    var inNameFirst = document.getElementById("inNameFirst").value;
    var inNameLast = document.getElementById("inNameLast").value;
    var inBirth = document.getElementById("inBirth").value;
    var inGender = document.getElementById("inGender").value;
    var inNumber = document.getElementById("inNumber").value;
    var gender = document.getElementById("gender");
    var telephone = document.getElementById("telephone");
    var name = document.getElementById("name");
    var birth = document.getElementById("birth");
    ;
    name.innerHTML = inNameFirst, inNameLast;
    birth.innerHTML = inBirth;
    gender.innerHTML = inGender;
    telephone.innerHTML = inNumber;
}
function loadImage(event) {
    var image = document.getElementById("imgDisplay");
    image.src = URL.createObjectURL(event.target.files[0]);
}
