
axios
.get('/getMe') 
.then(({data}) => console.log(`${data[0].name} is ${data[0].age} years old` ))

axios
.get('/getFriend') 
.then(({data}) => console.log(`${data.name} is ${data.age} years old` ))
