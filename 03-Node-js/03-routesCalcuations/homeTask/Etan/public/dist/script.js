axios.get("/photos").then(function (_a) {
    var data = _a.data;
    var flex = document.querySelector("#flex");
    var html = "";
    data.forEach(function (photo) {
        html += "<img src=\"" + photo.source + "\" alt=\"" + photo.title + "\">";
    });
    flex.innerHTML = html;
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
    var location = ev.target.value;
    var flex = document.querySelector("#flex");
    var html = "";
    try {
        if (location) {
            axios.get("/photos?location=" + location).then(function (_a) {
                var data = _a.data;
                data.forEach(function (photo) {
                    if (photo.location === location)
                        html += "<img src=\"" + photo.source + "\" alt=\"" + photo.title + "\">";
                });
                flex.innerHTML = html;
            });
        }
        console.log(location);
    }
    catch (error) {
        console.error(error);
    }
}
