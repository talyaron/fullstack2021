axios.get("/player").then(({ data }) => { console.log(data)})


function displayPlayer(ev){
    ev.preventDefault();
    const display = document.querySelector('.main_inputBox')
    const year = ev.target.value
    console.log(year);

    axios.get(`/player?year=${year}`).then(({ data }) => { console.log(data)})

    display.innerHTML += `<span class="main_inputBox_input-value">${year}</span>`
}





