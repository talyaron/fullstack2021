import { use } from "express/lib/application";

axios.get("/getArticale").then(({ data }) => {
    console.log(data);
  });
  function handleSearch(ev) {
      try{
    const search = ev.target.value;
    const regex = new RegExp(search, "i");
    const root = document.getElementById("rootSearch");
    root.innerHTML = "";
  
    if (search.length > 0) {
        axios.get(`/getArticale?search=${search}`).then(({data})=>{
      const foundProducts = data.filter((product) => {
        if (regex.test(product.title )) return true;
        else if (regex.test(product.articale )) return true;
        else if (regex.test(product.year )) return true;
        else{
            return false;
        }
      });
  
      const html = foundProducts
        .map((product) => {
          return `<div class = "rootSearch__articaleShow">
          <img src="${product.photo}">
          <h3>${product.title}</h3>
          <h6>${product.articale}<h6>
          <p>${product.year}</p></div>`;
        })
        .join("");
  
      root.innerHTML = html;
  
      console.log(foundProducts);
    })
}
}
catch (err) {
    console.log(err);
  }
  }
  
function handeleSelect(ev) {
    ev.preventDefault();
    try {
      const year = ev.target.value;
      console.log(year);
  
      if (year) {
        axios.get(`/getArticale?year=${year}`).then(({ data }) => {
            const filterUsers = data.filter((user) => user.year === year)

            const rootSlider = document.getElementById('rootSlider');

            rootSlider.innerHTML = `<p style="font-size: 12px;"> article from the year ${year}</p>`

          const root = document.getElementById("rootSearch");
          console.log(filterUsers);
            
          let html = "";
          if (Array.isArray(filterUsers)) {
            filterUsers.forEach((user) => {
              html += `<div class = "rootSearch__articaleShow">
              <img src="${user.photo}">
              <h3>${user.title}</h3>
          <h6>${user.articale}<h6>
          <p>${user.year}</p></div>`;
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
      const root = document.getElementById("rootSearch");
      const type = ev.target.value;
      console.log(type);
  
      if (type) {
        axios.get(`/getArticale?type=${type}`).then(({ data }) => {
             const filters = data.filter((user) => user.type === type);

          console.log(filters);
  
          let html = "";
          if (Array.isArray(filters)) {
            filters.forEach((user) => {
              html += `<div class = "rootSearch__articaleShow">
              <img src="${user.photo}">
              <h3>${user.title}</h3>
          <h6>${user.articale}<h6>
          <p>${user.year}</p></div>`;
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