const text = document.getElementById('text');
let imageContainer = document.querySelectorAll('img');

for (const hover of imageContainer) {

    hover.addEventListener('mouseenter', function(){
        text.innerHTML = hover.alt;
    })

    hover.addEventListener('mouseleave', function(){
        text.innerHTML = 'Hover Over The Book Cover To Reveal Title';
    })

}
