axios.get("/tamir")
    .then(({ data }) => {
        console.log(data)

    })

function handlefind(ev) {
    const user = ev.target.value;
    axios.get(`/tamir?user=${user}`)
        .then(({ data }) => {
            console.log(data)
            const root = document.getElementById('root');
            let html = '';
            if (Array.isArray(data)) {
                data.forEach((data1) => {
                    html += 
                    `<div class='grid' style="display: grid;grid-template-rows: repeat(1fr,1fr)">
                    <h3 class='grid__text'>${data1.text}</h3>
                    <h3 class='grid__text'>${data1.text1}</h3>
                   </div>
                    `
                })
                root.innerHTML = html;

            }

        })
}