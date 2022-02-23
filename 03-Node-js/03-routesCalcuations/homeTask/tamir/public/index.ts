axios.get('/work')
    .then(({ data }) => {
        console.log(data)
    })

function handleselect(ev) {
    const view = ev.target.value;
    console.log(view)
    if (view) {

        axios.get(`/work?view=${view}`)
            .then(({ data }) => {
                console.log(data)
                const root = document.getElementById('root')
                let html = ''
                if (Array.isArray(data)) {
                    data.forEach(work => {
                        html += `
                            <p><img src="${work.img}" alt="" class='img'></P>`
                    })
                    root.innerHTML = html
                } 

            })
    }

}
function handlechenge(ev) {
    const year = ev
    console.dir(ev)
    console.log(year)
    if (year) {
        axios.get(`/work?year=${year}`)
            .then(({ data }) => {
                console.log()
                const root2 = document.getElementById('root2')
                let html = ''
                if (Array.isArray(data)) {
                    data.forEach(work => {
                        html + `
                            <p><img src="${work.img}" alt="" class='img'></P>`
                    })
                    root2.innerHTML = html
                }
            })
    }
}



