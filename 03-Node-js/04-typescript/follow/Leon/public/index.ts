function initApp(){
    getAllData();
}
async function getAllData() {
    const data=axios.get(`/get-all-data`)
    
    console.log(data);
    
}