axios.get("/tamir")
    .then(({ data }) => {


    })

function handlefind(ev) {
    const user = ev.target.value
    console.log(user);

    axios.get(`/tamir?user=${user}`)
        .then(({ data }) => {
            const root = document.getElementById('root');
            let html = '';
            if (Array.isArray(data)) {
                data.forEach((data1)=>{
                    html+=`<h1 class='title'>${data1.title}</h1>
                    <h3> class='text'>${data1.text}</h3>
                    `
                })
                root.innerHTML=html;
            }

        })
}