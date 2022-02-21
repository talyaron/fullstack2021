let id = 0
axios
  .get("/getMe")
  .then(({data}) => {
    console.log(data);
    id = data[0].id;
    console.log(id)

  })
  .catch((err) => {
    console.error(err);
  });

  axios
  .get("/getFriends")
  .then(({data}) => {
    console.log({data});
    id = data[0].id;
    console.log(id)
  })
  .catch((err) => {
    console.error(err);
  });


