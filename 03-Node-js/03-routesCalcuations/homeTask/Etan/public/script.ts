
axios.get("/photos").then(({ data }) => {
  const flex = document.querySelector("#flex");
  let html = "";
  data.forEach((photo) => {
      html += `<img src="${photo.source}" alt="${photo.title}">`
  });
  flex.innerHTML = html
});

// axios.get("/photos").then(({ data }) => {
//   const list = document.querySelector("#places");
//   let html = "";
//   try {

//     data.forEach((photo) => {
//       html = `<option value='${photo.location}'>${photo.location}</option>`;
//       list.innerHTML += html;
//     });
//   } catch (error) {
//     console.error(error);
//   }
// });

function handleLocation(ev) {
  const location = ev.target.value;
  const flex = document.querySelector("#flex");
  let html = "";
  
  try {
    if (location) {
      axios.get(`/photos?location=${location}`).then(({ data }) => {
        data.forEach((photo) => {
          if (photo.location === location)
            html += `<img src="${photo.source}" alt="${photo.title}">`;
        });
        flex.innerHTML = html;
      });
    }
    console.log(location);
  } catch (error) {
    console.error(error);
  }
}
