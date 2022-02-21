axios
.get("/getMe")
.then(({data}) =>{
    console.log(data[0].name);
} )

axios
.get("/getFriends")
.then(({data}) =>{
    console.log(data);
} )