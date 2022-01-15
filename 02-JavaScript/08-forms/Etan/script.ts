const form = document.querySelector('form');
const destination = document.querySelector('#end')
let p = document.createElement("p");



form.addEventListener("submit", handle)

function handle(ev:any) {
    ev.preventDefault();
    for (let field of ev.target) {
        console.log(field.value);
    }
    function destination(ev){
        for(let field of ev.target){
            if(field.value!== 'Log In')
            p.field.textContent = ev.target.value;   
        }
    destination(ev)
}
}
console.log(p)