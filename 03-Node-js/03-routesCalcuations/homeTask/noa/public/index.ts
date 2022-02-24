axios.get("/getPictures").then(({data}) => {
    console.log(data)

})


function handleSlider(ev) {
    const year = ev.target.value
    console.log(year);

    const rootSlide = document.querySelector('#rootSlide')
    rootSlide.innerHTML = `year: `+ year;

    if(year){
        axios.get(`/getPictures?year=${year}`).then(({data})=>{

            console.log(data);

            const root = document.querySelector("#root");

            let html="";

            data.forEach((picture)=>{
                html+= `<img src="${picture.img}">`
            })
            root.innerHTML=html;
        })
    }
}