axios.get('/work')
    .then(function (_a) {
    var data = _a.data;
    console.log(data);
});
function handleselect(ev) {
    var view = ev.target.value;
    console.log(view);
    if (view) {
        axios.get("/work?view=" + view)
            .then(function (_a) {
            var data = _a.data;
            console.log(data);
            var root = document.getElementById('root');
            var html = '';
            if (Array.isArray(data)) {
                data.forEach(function (work) {
                    html += "\n                            <p><img src=\"" + work.img + "\" alt=\"\" class='img'></P>";
                });
                root.innerHTML = html;
            }
        });
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
