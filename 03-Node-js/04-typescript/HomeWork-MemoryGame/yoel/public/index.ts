function initApp(){
    getImg();
}

async function getImg(){
    const {data} = await axios.post('/get-picture')

    renderImage(data);
    
}
function renderImage(data:Array<any>){
    console.log(data);
    let html = '';

    data.forEach(img =>{
        html += `<div> <img src="${img.img}"></div>`
    })
    const root = document.getElementById('root')
    root.innerHTML = html;
}