axios.get('/muscleCars').then(({ data }) => {
    console.log(data)
})

function handelSelectCars(ev) {
    try {
        const car = ev.target.value;
        if (car){
            axios.get(`/muscleCars?car=${car}`).then(({ data }) => {
                const root = document.querySelector(".car__root")
                let html ='';
                if(Array.isArray(data)){
                    html += `<img src = '${data[0].img}'>
                    <h2> ${data[0].name} </h2>
                    <p> ${data[0].year} </p>`
                    root.innerHTML = html;
                }
                else{
                    throw new Error('Car doesnt exist')
                }
                
            })
        }
    } catch (err) {
        console.error(err)
    }
}