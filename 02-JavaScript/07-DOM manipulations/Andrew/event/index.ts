const photos = document.querySelectorAll('.content__galley__photo');
const bigPhoto1 = document.querySelector('.bigPic1');
const items = document.querySelectorAll('.obs');

photos.forEach(photo => {
    photo.addEventListener('mouseenter', handleHoverGallery);
});

bigPhoto1.addEventListener('mousemove', handleHoverBig);

function handleHoverGallery(ev): void {
    const discription = document.querySelector('#galleryDisc');
    const id: string = ev.target.id;
    switch (id) {
        case 'pic2':
            discription.innerHTML = "Second day of the YOTA challange";
            break;
        case 'pic3':
            discription.innerHTML = "My freind Denchik and I";
            break;
        case 'pic4':
            discription.innerHTML = "My loaded bike at the top of Avraham ascent";
            break;
    }
    console.log(`id is ${id}`);

    const removeText = setTimeout(textEraser, 2000);
    function textEraser() {
        discription.innerHTML = "";
    }
}

function handleHoverBig(ev): void {
    const discription = document.querySelector('#bigPic1Disc');
    const boundaries = ev.target.getBoundingClientRect();

    let curserLocation = {
        x: boundaries.width / (ev.clientX - boundaries.left),
        y: boundaries.height / (ev.clientY - boundaries.top)
    }
    console.log(`left: ${curserLocation.x} top ${curserLocation.y}`);
    if (curserLocation.x > 4.15 &&
        curserLocation.x < 38 &&
        curserLocation.y > 1.58 &&
        curserLocation.y < 4.52) {
        discription.innerHTML = "This is me and my awsome mustache";
    }
    else if (curserLocation.x > 2.27 &&
        curserLocation.x < 3.27 &&
        curserLocation.y > 1.8 &&
        curserLocation.y < 3.8) {
        discription.innerHTML = "This is my friend Moran";
    }
    else if (curserLocation.x > 1.46 &&
        curserLocation.x < 1.73 &&
        curserLocation.y > 2.08 &&
        curserLocation.y < 3.4) {
        discription.innerHTML = "This is my friend Ben";
    }
    else if (curserLocation.x > 1.03 &&
        curserLocation.x < 1.15 &&
        curserLocation.y > 1.98 &&
        curserLocation.y < 3.45) {
        discription.innerHTML = "This is my friend Yuri";
    }
    else {
        discription.innerHTML = "";
    }
}
const obsOptions = {
    threshold: 0,
    rootMargin: "-200px"
};
const observer = new IntersectionObserver(items =>{
    
    items.forEach(item => {
        // if(!item.isIntersecting){return;}
        item.target.classList.toggle("visable");
    });
},obsOptions);



items.forEach(item =>{
    observer.observe(item);
});
