const img: any = document.querySelectorAll('img');
console.log('img')

img.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        text.innerHTML = item.alt;
        console.log('MouseEnter')
    })
});
