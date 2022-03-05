axios
    .get('/get-pictures')
    .then(({ data }) => {
        console.log(data)

        
        const root = document.querySelector('#root')

        let html = '';
        data.forEach(pic => {
            html += `<div class="picture">
            <div><img src="${pic.img}" alt=""></div>
            <div class="pictureText">
            <div style="color: brown;">${pic.category}</div>
            <div>${pic.name}</div>
            <div style="color: brown;">${pic.year}</div>
            </div>
            </div>
            `
        });
        root.innerHTML = html;
    })

    

function handleSelect(ev) {
    const category = ev.target.value;
   
    axios
        .get(`/get-pictures?category=${category}`)
        .then(({ data }) => {
            console.log(data);

            const root = document.querySelector('#root')

            let html = '';
            data.forEach(pic => {
                html += `<div class="picture">
                <div><img src="${pic.img}" alt=""></div>
                <div class="pictureText">
                <div style="color: brown;">${pic.category}</div>
                <div>${pic.name}</div>
                <div style="color: brown;">${pic.year}</div>
                </div>
                </div>
                `
            });
            root.innerHTML = html;
        })
}



function handleSlider(ev) {
    const year = ev.target.value;

    const rootYear = document.querySelector('#rootYear')
    rootYear.innerHTML = year

    axios
    .get(`/get-pictures?year=${year}`)
    .then(({ data }) => {
        console.log(data);

        const root = document.querySelector('#root')

        let html = '';
        data.forEach(pic => {
            html += `<div class="picture">
            <div><img src="${pic.img}" alt=""></div>
            <div style="color: brown;">${pic.category}</div>
            <div>${pic.name}</div>
            <div style="color: brown;">${pic.year}</div>
            </div>
            `
        });
        root.innerHTML = html;
    })

  }




