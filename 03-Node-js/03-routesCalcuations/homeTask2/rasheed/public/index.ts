axios
.get('/get-users').then(({data})=>{
    console.log(data)
});


function handleSearch(ev) {
    const search = ev.target.value;
    console.log(search);


    axios.get(`/get-users?search=${search}`).then(({ data }) => {

        const root = document.getElementById('root');
        root.style.border = '1px solid #ddd'
        root.style.borderRadius = ' 15px'
        let html = "";
            data.forEach((searchData) => {
                html += `
                <div class="searchData">
                <h1>${searchData.title}</h1>
                </div>`
            });
            root.innerHTML = html;
    });



}