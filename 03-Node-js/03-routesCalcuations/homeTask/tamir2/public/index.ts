axios.get("/tamir")
    .then(({ data }) => {
        console.log(data)

    })

function handlefind(ev) {
    axios.get(`/tamir`)
        .then(({ data }) => {
            const user = ev.target.value
            const rexEa = new RegExp(user, 'i')
            if (rexEa.test(data)) {
                document.getElementById('root').innerHTML = `yes ${user}`
            } else {
                document.getElementById('root').innerHTML = `no ${user}`
            }
        })


}







console.log('hay')