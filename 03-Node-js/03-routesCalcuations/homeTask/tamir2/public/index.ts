axios.get("/tamir")
    .then(({ data }) => {


    })

function handlefind(ev) {
    const user = ev.target.value
    axios.get('/tamir')
        .then(({ data }) => {
       console.log(data)
       
        })
}