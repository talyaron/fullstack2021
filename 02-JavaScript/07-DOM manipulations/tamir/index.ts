let wrapper1: any = document.getElementById('wrapper')
wrapper1.style.display = 'flex';
wrapper1.style.height = '200px';;
wrapper1.style.justifyContent = 'center'

const text = document.getElementById('text')
text.style.color='black' 
text.style.fontSize='3em';
text.style.textAlign = 'center'
text.style.backgroundColor = 'red'
text.style.width = '52.5%'
text.style.height = '8vh'
text.style.position = 'absolute'
text.style.top = '20%'

const img = document.querySelectorAll('img')


for (let i of img) {
    console.log(i.alt)
    i.addEventListener('mouseenter', () => {
        text.innerHTML = i.alt
    })
}


