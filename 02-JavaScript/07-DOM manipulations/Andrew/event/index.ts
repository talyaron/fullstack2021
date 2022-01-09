const photos = document.querySelectorAll('.content__galley__photo');
const bigPhotos = document.querySelectorAll('.bigPic');
const items = document.querySelectorAll('.obs');
const discription = document.querySelector('#galleryDisc');

photos.forEach(photo => {
    photo.addEventListener('mouseenter', handleHoverGallery);
});
photos.forEach(photo => {
    photo.addEventListener('mouseout', handleOutGallery);
});
bigPhotos.forEach(bigPhoto => {
    bigPhoto.addEventListener('mousemove', handleHoverBig);
});

function handleOutGallery():void {
    discription.innerHTML = "";
}

function handleHoverGallery(ev): void {
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
}

function handleHoverBig(ev): void {
    const discription1 = document.querySelector('#bigPic1Disc');
    const discription2 = document.querySelector('#bigPic2Disc');
    const boundaries = ev.target.getBoundingClientRect();
    const id: string = ev.target.id;

    let curserLocation = {
        x: boundaries.width / (ev.clientX - boundaries.left),
        y: boundaries.height / (ev.clientY - boundaries.top)
    }
    console.log(`left: ${curserLocation.x} top ${curserLocation.y}`);

    switch (id) {
        case 'big1':
            if (curserLocation.x > 4.15 &&
                curserLocation.x < 38 &&
                curserLocation.y > 1.58 &&
                curserLocation.y < 4.52) {
                discription1.innerHTML = "This is me and my awsome mustache";
            }
            else if (curserLocation.x > 2.27 &&
                curserLocation.x < 3.27 &&
                curserLocation.y > 1.8 &&
                curserLocation.y < 3.8) {
                discription1.innerHTML = "This is my friend Ross";
            }
            else if (curserLocation.x > 1.46 &&
                curserLocation.x < 1.73 &&
                curserLocation.y > 2.08 &&
                curserLocation.y < 3.4) {
                discription1.innerHTML = "This is my friend Ben";
            }
            else if (curserLocation.x > 1.03 &&
                curserLocation.x < 1.15 &&
                curserLocation.y > 1.98 &&
                curserLocation.y < 3.45) {
                discription1.innerHTML = "This is my friend Yuri";
            }
            else {
                discription1.innerHTML = "";
            }
            break;
        case 'big2' :
            if (curserLocation.x > 6.6 &&
                curserLocation.x < 10.2 &&
                curserLocation.y > 2.65 &&
                curserLocation.y < 3.6) {
                discription2.innerHTML = "This is my friend Ben";
            }
            else if (curserLocation.x > 4.1 &&
                curserLocation.x < 4.96 &&
                curserLocation.y > 2.57 &&
                curserLocation.y < 3.19) {
                discription2.innerHTML = "This is my Norwegian freind Jani";
            }
            else if (curserLocation.x > 2.9 &&
                curserLocation.x < 3.41 &&
                curserLocation.y > 2.75 &&
                curserLocation.y < 3.6) {
                discription2.innerHTML = "That is me!";
            }
            else if (curserLocation.x > 2.08 &&
                curserLocation.x < 2.26 &&
                curserLocation.y > 2.55 &&
                curserLocation.y < 3.14) {
                discription2.innerHTML = "This is my friend Sapir";
            }
            else if (curserLocation.x > 1.58 &&
                curserLocation.x < 1.72 &&
                curserLocation.y > 2.57 &&
                curserLocation.y < 3.35) {
                discription2.innerHTML = "This is my friend Yuri";
            }
            else if (curserLocation.x > 1.28 &&
                curserLocation.x < 1.37 &&
                curserLocation.y > 2.4 &&
                curserLocation.y < 3.3) {
                discription2.innerHTML = "This is my friend Max";
            }
            else if (curserLocation.x > 1.1 &&
                curserLocation.x < 1.17 &&
                curserLocation.y > 2.5 &&
                curserLocation.y < 3.36) {
                discription2.innerHTML = "This is my friend Ross";
            }
            else {
                discription2.innerHTML = "";
            }
            break;
        
    }
}

const obsOptions = {
    threshold: 0.6,
    rootMargin: "-50px"
};

const observer = new IntersectionObserver(items => {

    items.forEach(item => {
        // if(!item.isIntersecting){return;}
        item.target.classList.toggle("visable");
    });
}, obsOptions);

items.forEach(item =>{
    observer.observe(item);
});
