function handleSelect(e) {
    try {

        const type = e.target.value
        const root = document.querySelector('#root');

        if (!root) throw new error ('root in handleSelect')
        if (!type) throw new error ('type in handleSelect')

        console.log(type);



        if (typeof type === 'string') {

            axios.get(`/arts?type=${type}`)
                .then(({
                    data
                }) => {
                    // console.log(data);
                    render(data, root);
                })

        } else if (typeof type === 'number'){
            console.log(type);
        }

    } catch (error) {
        console.error(error);
    }
}

function render(data, root) {
    try {

        if (!data) throw new error('Wow, there is a problem with data in render');
        if (!root) throw new error('Wow, there is a problem with root in render');

        let html = '';

        data.forEach(element => {
            html += `<img alt="Your browser does not support this image" src="${element.url}">`
        });

        root.innerHTML = html;

    } catch (error) {
        console.error(error);
    }
}