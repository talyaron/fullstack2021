axios
  .get("/getPics")
  .then(({data}) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

  
