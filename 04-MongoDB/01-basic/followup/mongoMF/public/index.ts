async function handleLoadPrayers() {

    try {

        const { data } = await axios.get('/get-prayers')
        const { prayers } = data

        const root = document.querySelector('#root')
        renderPrayers(prayers, root);

    } catch (error) {

    }
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

};

function renderPrayers(prayers, root) {

    try {
        const html = prayers.map(prayer => {
            return `<div class="card"><p>${prayer.name} ${prayer.family}</p><p>  number of kids: ${prayer.kids}</p><p>   Role: ${prayer.role}</p>
            </div>
            <button id="${prayer._id}" onclick="handleDelete(event)">Delete</button>
            `
        }).join('')

        root.innerHTML = html

        if (!root) throw new Error("no root in renderPrayers");

    } catch (error) {
        console.error(error.message);

    }

}

function renderGabaim(gabaim, rootGabai) {

    try {
        const html = gabaim.map(gabai => {
            return `<div class="cardGabai"><h2>Gabai: ${gabai.name} ${gabai.family} </h2>
            <form id="${gabai._id}" onsubmit="handleUpdateGabai(event)">

            <input type="text" name="name" id="name" placeholder="name" value="${gabai.name}" required>
            <input type="text" name="family" id="family" placeholder="family name" value="${gabai.family}" required>
            <input type="number" name="kids" id="kids" placeholder="number of kids" value="${gabai.kids}" required>
            <input type="date" name="birth" id="birth" placeholder="date of birth" required>
            <input type="submit" name="submit" value="UPDATE GABAI">

            </form>
            </div>`
        }).join('')

        rootGabai.innerHTML = html

        if (!rootGabai) throw new Error("no rootGabai in renderGabaim");

    } catch (error) {
        console.error(error.message);

    }

}

async function handleUpdateGabai(ev) {

    ev.preventDefault();

    try {
        const id = ev.target.id

        let { name, family, kids, birth } = ev.target.elements
        name = name.value;
        family = family.value
        kids = kids.value
        birth = birth.value

        const { data } = await axios.patch('/update-gabaim', { name, family, kids, birth, id })
        const { gabaim } = data

        const rootGabai = document.querySelector('#rootGabai')
        renderGabaim(gabaim, rootGabai)

        if (!gabaim) throw new Error("no gabaim in handleUpdateGabai");

    } catch (error) {
        console.error(error.message);

    }

    ev.target.reset();

}

async function handleDelete(e) {

    try {
        const id = e.target.id

        const { data } = await axios.delete('/delete-prayer', { data: { id } })

        if(!id || !data) throw new Error("no id || data in handleDelete");
        
    } catch (error) {
        console.error(error.message);
        
    }
}














