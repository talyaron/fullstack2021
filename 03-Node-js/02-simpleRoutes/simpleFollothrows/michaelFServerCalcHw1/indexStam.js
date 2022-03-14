function handleSelect(e) {
    try {

        const type = e.target.value;
        console.log(type);

        if (type) {

            axios.get(`/getArts?type=${type}`)
                .then(({
                    data
                }) => {
                    console.log(data);
                    const root = document.querySelector('#root');

                    let html = "";

                    data.forEach(element => {

                        html += `<div class="card">
                        <img src="${element.url}">
                        </div>`

                    });

                    root.innerHTML = html
                })
        }
    } catch (error) {
        console.error(error);
    }
};



function handleRange(e) {
    try {
        const range = e.target.value;
        const rootRange = document.querySelector('#rootRange');
        if (!rootRange) throw new error('Whoops! No rootRange in handleRange');


        if (range) {

            axios.get(`/getRange?range=${range}`)
                .then(({
                    data
                }) => {
                    console.log(data);
                    let html = "";

                    data.forEach(element => {

                        html += `<div class="card">
                        <img src="${element.url}">
                        </div>`

                    });

                    rootRange.innerHTML = html
                })


        }

    } catch (error) {
        console.error(error);
    }


}