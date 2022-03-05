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

function handleDelete() {

  const remove = document.querySelector('#remove');
  let array = [];

  remove.onclick = async function () {
    const markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');


    for (let checkbox of markedCheckbox) {

      array.push(checkbox.id)
    }

    const { data } = await axios.post('/deleteArticle', { array });
    const root = document.querySelector('#root')

    renderArticles(root, data);

  }
}

function handleAdd(e) {
  const rootAdd = document.querySelector('#rootAdd');

  renderForm(rootAdd);

}

function handleForm(e) {
  e.preventDefault();

  try {
    const titleForm = e.target.elements.title.value;
    const textForm = e.target.elements.text.value;
    const root = document.querySelector('#root');

    if (!titleForm || !textForm || !root) throw new Error("handleAdd");

    const { data } = axios.post('/addArticle', { title: titleForm, text: textForm });
    renderArticles(root, data)

  } catch (error) {
    console.error(error);

  }



  e.target.reset();
}

function renderForm(rootAdd) {
  let html = `<form id="form" onsubmit="handleForm(event)">
  <input type="text" name="title" placeholder="Title">
  <input type="text" name="text" placeholder="Abstract">
  <input type="submit" name="submit" value="Add" style="border: 2px solid #20558a; background: transparent; color: #20558a; width: 100px; border-radius: 5px;">
  </form>
  `
  rootAdd.innerHTML = html

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
      <input type="checkbox" class="delete" id="${data[index].id}" onchange="handleDelete()"><span>${index + 1}</span> 
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


