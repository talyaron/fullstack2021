axios.get('/work')
    .then(({ data }) => {
        console.log(data)
    })

function handleselect(ev) {
    const year = ev.target.valu
    const img= ev.target.value
    const view = ev.target.value;
    console.log(view)
    if (view) {
        try {
            axios.get(`/work?view=${view}&&?img=${img}`)
                .then(({ data }) => {
                    console.log(data)
                    const root = document.getElementById('root')
                    let html = ''
                    if (Array.isArray(data)) {
                        data.forEach(work => {
                            html += `<p>${work.img}</P>`
                        })
                        root.innerHTML = html
                    }
                   
                })
        } catch (err) {
            throw new Error("eroor");

        }
    }
}
