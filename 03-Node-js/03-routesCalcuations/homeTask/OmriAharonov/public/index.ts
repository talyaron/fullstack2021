axios.get('/muscleCars').then(({ data }) => {
    console.log(data)
})

function handelSelectCars(ev) {
    try {
        const car = ev.target.value;
        // console.log(car)
        
    } catch (err) {
        console.error(err)
    }
}