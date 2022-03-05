function handleSearch(ev) {

  try {

    const search = ev.target.value;
    if (!search) throw new Error("search in handleSearch");

    axios.get(`/googleSearch?search=${search}`)
      .then(({ data }) => {
        const root = document.querySelector('#root')
        renderArticles(root, data)

      })
  } catch (error) {
    console.error(error);

  }
}

function renderArticles(root, data) {
  try {

    const indexRoot = document.querySelector('#index');

    if (!root) throw new Error("root in renderArticles");
    if (!data) throw new Error("data in renderArticles");


    let html = '';
    for (let index = 0; index <= data.length; index++) {
      html += `<div class="container">
      <div class="index">
      <input type="checkbox"><span>${index + 1}</span> 
      </div>
      <div class="card">
      <h2>${data[index].title}</h2>
      <p>${data[index].text}</p>
      <p>N Engl J Med. ${data[index].year};380(26):2518-2528. doi: 10.1056/NEJMoa1903076. Epub 2019 May 20.
      PMID: 31112379</p>
      </div>
      </div>
      `
      root.innerHTML = html       
      indexRoot.innerHTML = data.length + '  results'
    }
    
    
    

  } catch (error) {
    console.error(error);

  }
}


