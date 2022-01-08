const dflt = document.getElementById('deafultText');
let boxes = document.querySelectorAll('img');

for (const i of boxes) {

    i.addEventListener('mouseenter', () => {
        dflt.innerHTML = 'This is ' + i.alt;
    })

    i.addEventListener('mouseleave', () => {
        dflt.innerHTML = 'Those are my pets';
    })

}
