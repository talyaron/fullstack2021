axios.get("/getUser").then(({ data }) => {
  console.log(data);
});

function handeleSelect(ev) {
  ev.preventDefault();
  try {
    const year = ev.target.value;
    console.log(year);

    if (year) {
      axios.get(`/getUser?year=${year}`).then(({ data }) => {
        const root = document.getElementById("rootFilter");
        console.log(data);

        let html = "";
        if (Array.isArray(data)) {
          data.forEach((user) => {
            html += `<div class="rootFilter__card"><img src="${user.photo}" style="width:70%; height:100%;"></img>
                        <div class="nameYear">
                        <p>${user.name}</p>
                        <p>year: ${user.year}</p></div></div>`;
          });
          root.innerHTML = html;
        } else {
          throw new Error("data is not an array try again");
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
}
function handleSelectType(ev) {
  ev.preventDefault();
  try {
    const root = document.getElementById("rootFilter");
    const type = ev.target.value;
    console.log(type);

    if (type) {
      axios.get(`/getUser?type=${type}`).then(({ data }) => {
        console.log(data);

        let html = "";
        if (Array.isArray(data)) {
          data.forEach((user) => {
            html += `<div class="rootFilter__card"><img src="${user.photo}" style="width:70%; height:100%;"></img>
                        <div class="nameYear">
                        <p>${user.name}</p>
                        <p>year: ${user.year}</p></div></div>`;
          });
          root.innerHTML = html;
        } else {
          throw new Error("data is not an array try again");
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
}
