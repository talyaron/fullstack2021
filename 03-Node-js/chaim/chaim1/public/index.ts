axios
  .get("/")
  .then(({data}) => {
    console.log(data);

  })
  .catch((err) => {
    console.error(err);
  });
