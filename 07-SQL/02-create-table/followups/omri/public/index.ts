
async function handleClick() {
    try {

        const { data } = await axios.post('/api/create-databse', {});
        //   const {data} = await axios.delete('/api/delete-databse',{});
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}

async function handleAddCar(ev: any) {
    ev.preventDefault();
    try {
        let {licensePlate, manufacturer, type, year} = ev.target.elements;
        if(!licensePlate || !manufacturer || !type || !year) throw new Error('car data is missing');
        licensePlate = licensePlate.value;
        manufacturer = manufacturer.value;
        type = type.value;
        year = year.value;
        const {data} = await axios.post('/api/add-car', {licensePlate,manufacturer,type,year});
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
