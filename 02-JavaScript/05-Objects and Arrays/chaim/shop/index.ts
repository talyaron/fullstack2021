interface zap {
    items: Array<{ string }>,
    list: Array<{ string }>
}

function handlesubmit() {
    this.preventDefault()
    const form = {}
   
}
handlesubmit();

function handlefilter() {
    this.onkeypress()
    let a = 50;
    let b = 100;
    let c = 150;
    if (a < 100) {
        console.log(a);
    }
    return;

}

html += `<h2>books</h2>`
zap.items.forEach(items => {
    const zaphtml = `<div class= 'staff'><h3> ${items.name}</h3></div>`;
    html += zaphtml;
})