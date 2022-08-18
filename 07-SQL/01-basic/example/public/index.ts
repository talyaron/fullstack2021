async function handleClick() {
  try {
    //
    // const {data} = await axios.post('/api/create-databse',{});
    const { data } = await axios.post("/api/create-table", {});
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function handleAddCar(ev:any){
  ev.preventDefault();
  try {

    let {year, model, license,manufacturer} = ev.target.elements;
    if(!year || !license || !model || !manufacturer) throw new Error ('Missing data');
    year = year.value;
    license = license.value;
    model = model.value;
    manufacturer = manufacturer.value;

    const { data } = await axios.post("/api/add-car", {year, model, license, manufacturer});
    console.log(data);

  } catch (error) {
    console.error(error);
  }
}

async function handleAddBuyer(ev:any){
  ev.preventDefault();
  try {

    let {name, buyerId, year_of_birth} = ev.target.elements;
    if(!name || !year_of_birth || !buyerId ) throw new Error ('Missing data');
    name = name.value;
    year_of_birth = year_of_birth.value;
    buyerId = buyerId.value;
   

    const { data } = await axios.post("/api/add-buyer", {name, buyerId, year_of_birth});
    console.log(data);

  } catch (error) {
    console.error(error);
  }
}
