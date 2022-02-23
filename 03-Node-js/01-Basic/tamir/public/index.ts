axios
  .get("/me")
  .then(({data}) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

  axios
  .get("/friend")
  .then(({data}) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });