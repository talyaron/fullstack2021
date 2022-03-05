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
// function handlechenge(ev) {
//     const slid =ev.target.value
//     axios.get(`/work?year=${slid}`)
//             .then(({ data }) => {
//                 console.log(data)
//                 const root = document.getElementById('root')
//                 let html = ''
//                 if (Array.isArray(data)) {
//                     data.forEach(work => {
//                         html += `
//                             <p><img src="${work.img}" alt="" class='img'></P>`
//                     })
//                     root.innerHTML = html
//                 }else if(html){


//                 }

//             })
// }



