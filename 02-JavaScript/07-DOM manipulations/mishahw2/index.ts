const dflt = document.getElementById('deafultText');
dflt.innerHTML = 'These are my pets';
let boxes = document.querySelectorAll('img');

for (const i of boxes) {

    i.addEventListener('mouseenter', () => {
        dflt.innerHTML = 'This is ' + i.alt;
    })

    i.addEventListener('mouseleave', () => {
        dflt.innerHTML = 'These are my pets';
    })

}
