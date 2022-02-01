const creat = document.getElementById("creat");
creat.addEventListener("click", cardDisplay);



function cardDisplay(ev) {
    ev.preventDefault();
    const card = document.querySelector<HTMLElement>('.card-container')!;
    card.style.opacity = '1';
    const form = document.querySelector<HTMLElement>('.form-container')!;
    form.style.opacity = '0';
    const inNameFirst = (<HTMLInputElement>document.getElementById("inNameFirst")).value;
    const inNameLast = (<HTMLInputElement>document.getElementById("inNameLast")).value;
    const inBirth = (<HTMLInputElement>document.getElementById("inBirth")).value;
    const inGender = (<HTMLInputElement>document.getElementById("inGender")).value;
    const inNumber = (<HTMLInputElement>document.getElementById("inNumber")).value;

    
    const gender = document.getElementById("gender");
    const telephone = document.getElementById("telephone")
    const name = document.getElementById("name");
    const birth = document.getElementById("birth");;

    name.innerHTML = inNameFirst, inNameLast;
    birth.innerHTML = inBirth;
    gender.innerHTML = inGender
    telephone.innerHTML = inNumber;

}

function loadImage(event) {
    const image = (<HTMLInputElement>document.getElementById("imgDisplay"))
    image.src = URL.createObjectURL(event.target.files[0]);
}