const info = {};

function handleSubmit(ev){
    ev.preventDefault();
    for(let elem of ev.target){

        if(elem.name !== 'submit')info[elem.name] = elem.valueAsNumber;
        console.dir(elem)
    }
console.dir(info)
    
const hei =  info['weight'];
const wei = info['height'];

console.log(hei);
console.log(wei);

}










