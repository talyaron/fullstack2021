//call the server and get inforamtion

console.log("before....");
let id = 0;

axios.get("/getUsers").then(({data}) => {console.log(data);id = data[0].id;console.log(id);})
  .catch((err) => {
    
    console.error(err);
  });

console.log("after...");
console.log(id);
