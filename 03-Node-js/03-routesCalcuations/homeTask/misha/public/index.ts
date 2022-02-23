
// function handleSlider(ev) {

//     axios.get(`/get-photos?year=${gender}&stam=123`).then(({ data }) => {
//     }
// }

let slider:any = document.getElementById("myRange");
let output:any = document.getElementById("value")

output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
}

slider.addEventListener("mousemove", function(){

    let year = slider.value;
    let perc = (year-1990) * 4;

    axios.get(`/get-photos`).then(({ data }) => {

        
        const root = document.querySelector("#root")
        const filteredYear = data.filter((photo) => photo.year === year);

        let html = `<img src='${filteredYear[0].url}'></img>`
        root.innerHTML = html;

    })

    console.log(perc);

    let color = `linear-gradient(90deg, rgb(117,252,117)${perc}%, rgb(214,214,214),${perc}%)`;
    slider.style.background = color;

   
})