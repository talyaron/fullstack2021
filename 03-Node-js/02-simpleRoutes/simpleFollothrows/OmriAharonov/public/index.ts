axios
  .get("/getMe")
  .then(({data}) => {
    //console.log('my name is ', data[0].name , ' and i am ', data[0].age , ' years old');
    console.log(data)
  })
  .catch((err) => {
    console.error(err);
  });