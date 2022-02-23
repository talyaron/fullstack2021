axios
  .get("/getMe")
  .then(({data}) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

  axios
  .get("/getMyFriend")
  .then(({data}) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
