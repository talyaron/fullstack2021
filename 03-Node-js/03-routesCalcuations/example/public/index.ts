axios.get("/get-users").then(({ data }) => {
  console.log(data);
});

function handleSelectUsers(ev) {
  try {
    const gender = ev.target.value;
    console.log(gender);
    if (gender) {
      axios.get(`/get-users?gender=${gender}&stam=123`).then(({ data }) => {
        console.log(data);

        const root = document.querySelector("#root");

        let html = "";
        if (Array.isArray(data)) { //check that the data is an array
          data.forEach((user) => {
            html += `<p>${user.name}</p>`;
          });
          root.innerHTML = html;
        } else {
          throw new Error("data is not an array");
        }
      });
    }
  } catch (err) {
    console.error(err);
  }
}
