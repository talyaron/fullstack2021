const text = document.getElementById('text');
let imageContainer = document.querySelectorAll('img');

for (const i of imageContainer) {

    i.addEventListener('mouseenter', function(){
        text.innerHTML = i.alt;
    })

    i.addEventListener('mouseleave', function(){
        text.innerHTML = 'Hover Over The Book Cover To Reveal Title';
    })

}

