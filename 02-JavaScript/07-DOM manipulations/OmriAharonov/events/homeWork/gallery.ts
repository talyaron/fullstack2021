const box:any = document.querySelector('.box');
const description:any = document.querySelector('.description');
const gallery:any = document.querySelectorAll('.gallery');
//const pic:any = document.querySelectorAll('.pic');

gallery.forEach(picture => {
    picture.addEventListener('mouseenter', handleHover)
});

function handleHover(){
    
};



