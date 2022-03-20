async function handleLoadPrayers() {

    const { data } = await axios.get('/get-prayers')
    const { prayers } = data
    console.log(data);

}

async function handleRegister(ev) {

    ev.preventDefault();

    try {

        let { name, family, role, kids, birth } = ev.target.elements;
        name = name.value;
        family = family.value
        role = role.value
        kids = kids.value
        birth = birth.value

        const { data } = await axios.post('/add-prayer', { name, family, role, kids, birth })
        console.log(data);

        if (!name || !family || !role || !kids || !birth) throw new Error("no name, family, role, kids, birth in handleRegister");

    } catch (error) {
        console.error(error.message);

    }

    ev.target.reset();

}

async function handleGetGabaim() {

    const { data } = await axios.get('/get-gabaim')
    const { gabaim } = data

    const rootGabai = document.querySelector('#rootGabai')
    renderGabaim(gabaim, rootGabai)
    console.log(gabaim);

};


function renderGabaim(gabaim, rootGabai) {

    try {
        const html = gabaim.map(gabai => {
            return `<div class="cardGabai"><h2>${gabai.name} ${gabai.family}</h2></div>`  
        }).join('')

        rootGabai.innerHTML = html

        if (!rootGabai) throw new Error("no rootGabai in renderGabaim");

    } catch (error) {
        console.error(error.message);

    }

}














