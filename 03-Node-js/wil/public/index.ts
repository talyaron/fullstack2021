axios
  .get("/getMe")
  .then(({data}) => {
    console.log(data);
 
  })
  .catch((err) => {
    console.error(err);
  });
  
axios
  .get("/getFriends")
  .then(({data}) => {
    console.log(data);
 
  })
  .catch((err) => {
    console.error(err);
  });