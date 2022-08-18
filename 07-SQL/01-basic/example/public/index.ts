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

async function handleAddCar(ev: any) {
  ev.preventDefault();
  try {
    let { year, model, license, manufacturer } = ev.target.elements;
    if (!year || !license || !model || !manufacturer)
      throw new Error("Missing data");
    year = year.value;
    license = license.value;
    model = model.value;
    manufacturer = manufacturer.value;

    const { data } = await axios.post("/api/add-car", {
      year,
      model,
      license,
      manufacturer,
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

async function handleAddBuyer(ev: any) {
  ev.preventDefault();
  try {
    let { name, buyerId, year_of_birth } = ev.target.elements;
    if (!name || !year_of_birth || !buyerId) throw new Error("Missing data");
    name = name.value;
    year_of_birth = year_of_birth.value;
    buyerId = buyerId.value;

    const { data } = await axios.post("/api/add-buyer", {
      name,
      buyerId,
      year_of_birth,
    });
    console.log(data);

    
  } catch (error) {
    console.error(error);
  }
}

async function handleGetBuyers() {
  try {
    const { data } = await axios.get("/api/get-buyers");
    console.log(data);
    const {buyers} = data;

    const years:number[] = [];
    
    if(!buyers) throw new Error('No buyers in DB result');
    const buyersRoot = document.querySelector('#showUsers');
    let html = ''
    buyers.forEach(buyer=>{
      years.push(buyer.year_of_birth);
      html += `<p>${buyer.name}, year of birth ${buyer.year_of_birth}</p>`
    })
    const maxYear = Math.max(...years);
    const minYear = Math.min(...years);
    html += `<input type='range' max=${maxYear} min=${minYear} onchange='handleGetByYear(event)'>` 
    buyersRoot.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

async function handleGetByYear(ev){
  try {
    const year = ev.target.valueAsNumber;
    console.log(year);
    const { data } = await axios.get(`/api/get-buyers-by-year?year=${year}`);
    console.log(data);

  } catch (error) {
    console.error(error);
  }
}

async function handleGetYoungestBuyer() {
  try {
    const { data } = await axios.get(`/api/get-youngest-buyer`);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  
}

async function handleSearch(ev){
  try {
    const name = ev.target.value;
    const { data } = await axios.get(`/api/search-buyers?name=${name}`);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
