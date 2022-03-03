const axios = require('axios').default;

function handleSearch(){
    axios.get('/get').then(({data})  =>{
        console.log(data);
    })
}