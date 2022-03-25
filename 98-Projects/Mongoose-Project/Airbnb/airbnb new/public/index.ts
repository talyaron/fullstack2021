async function loadPlaces(){
    const {data} = await axios.get('/getPlaces')
    console.log(data);
    
  //  renderAirbnb(data);
}