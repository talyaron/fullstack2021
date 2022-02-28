axios.get("/get-articles").then(({ data }) => {
  console.log(data);
});

function handleSearch(ev) {
  let searchArea = document.querySelector("search");
  const searchTerm = ev.target.value;
  const regEx = new RegExp(searchTerm, "i");
  let html = "";
  console.log(searchTerm.length);

  axios.get(`/get-articles?searchTerm=${searchTerm}`).then(({ data }) => {
    const root = document.querySelector("articles");
    root.innerHTML = "";
    if (searchTerm.length > 0) {
      if (Array.isArray(data)) {
        console.log(data);
        const foundArticles = data.filter((article) => {
          if (article.title.match(regEx)) return true;
        });
        let html = foundArticles.map((article) => {
          return `<div class="article">
          <dlink>${article.link}</dlink>
            <h1>${article.title}</h1>
            <p>${article.text}</p>
            </div>`;
        });

        searchArea.style.transform = "translate(-50%, -130%)";
        root.innerHTML = html;
      }
    }
    if (searchTerm.length === 0) {
      html = "";
      searchArea.style.transform = "translate(-50%,-50%)";
      root.innerHTML = html;
    }
  });
}
