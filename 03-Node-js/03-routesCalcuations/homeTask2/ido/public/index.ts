axios.get("/data").then(({ data }) => { console.log(data) })



function renderItems() {
  const display = document.querySelector('.main_display')
  let html = '';
  axios.get("/data").then(({ data }) => {
    data.forEach(item => {
      html += `<div class="main_display-card">
        <img class="main_display-card-img" src="${item.picUrl}" alt="Avatar" style="width:100%">
        <div class="main_display-card-details">
          <h4 class="main_display-card-details-title detailsInCard"><b>${item.title}</b><br>
            <span class="main_display-card-details-description detailsInCard">${item.description}</span></h4> 
          <p class="main_display-card-details-price detailsInCard">$${item.price}</p>
        </div>
      </div>`
    });
    display.innerHTML = html
  })
}

function displayByInput(ev) {

  const display = document.querySelector('.main_display')
  const dataList = document.querySelector('.main_header-search-dataList')

  let html = '';
  const inputValue = ev.target.value;
  axios.get(`/searched-data?input=${inputValue}`).then(({ data }) => {
    data.forEach((item)=> {
    html += `<div class="main_display-card">
      <img class="main_display-card-img" src="${item.picUrl}" alt="Avatar" style="width:100%">
      <div class="main_display-card-details">
        <h4 class="main_display-card-details-title detailsInCard"><b>${item.title}</b><br>
          <span class="main_display-card-details-description detailsInCard">${item.description}</span></h4> 
        <p class="main_display-card-details-price detailsInCard">$${item.price}</p>
      </div>
    </div>`
  })
  display.innerHTML = html
  })
}











