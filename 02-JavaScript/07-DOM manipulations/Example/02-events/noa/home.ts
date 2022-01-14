const img: any = document.querySelectorAll('img');
console.log('img')

let text= document.getElementById('text');

img.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        text.innerHTML = item.alt;
        console.log('MouseEnter')
    })
});
