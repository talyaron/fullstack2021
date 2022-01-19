interface Home {
    objects: [{
        title: string
        value: Array<string>
    },
        {
            title: string
            value: Array<string>
        },
        {
            title: string
            value: Array<string>
        }],
    addto(arrayName, add),
    remove(arrayName, removeElm)

}

const selectArray = document.getElementById('selectArray')
const input = document.getElementById('input')
const boxes = document.querySelectorAll('.main-show-box')
const movies = document.getElementById('movies')
const games = document.getElementById('movies')
const shoes = document.getElementById('movies')


let myhome: Home = {
    objects: [
        {
            title: 'SHOES',
            value: ['nike', 'adidas']
        },
        {
            title: 'GAMES',
            value: ['fortnite', 'call of duty']
        },
        {
            title: 'MOVIES',
            value: ['spiderman', 'forest gamp']
        }],
    addto(arrayName, add) {
        for (let i = 0; i < this.objects.length; i++) {
            if (arrayName == this.objects[i].title) {
                this.objects[i].value.push(add)
            }
        }
    },
    remove(arrayName, removeElm) {
        for (let i = 0; i < this.objects.length; i++) {
            if (arrayName == this.objects[i].title){
                for(let x = 0;x<this.objects[i].value.length;x++){
                    if(removeElm == this.objects[i].value[x]){
                        this.objects[i].value.splice(x,1)
                    }else{
                        this.objects[i].value = this.objects[i].value
                    }
                }
            }
        }
    }
}


console.log(Object.keys(myhome))
console.log(Object.keys(boxes))



console.log(myhome.objects);

function displayHome(ev): void {
    ev.preventDefault();
    let arrayName;
    let add: string;
    let removeElm;

    for (let field of ev.target) {
        if (field.name !== "submit") {
            if (field.name == "listArrays") {
                arrayName = field.value
            } else if (field.name == "inputAdd") {
                add = field.value
            } else if (field.name == "inputRemove") {
                removeElm = field.value
            }
        }
    }

    
    // console.log(removeElm);
    // console.log(add);
    console.log(arrayName);

    myhome.addto(arrayName, add)
    myhome.remove(arrayName, removeElm)
    creatCard(myhome.objects)
    checkFields(add ,removeElm ,arrayName)
}

function creatCard(objects) {
    for (let i = 0; i < objects.length; i++) {
        boxes[i].innerHTML = `<h2>${objects[i].title}<h2/>` + `<p class="main-show-box-displayList">${objects[i].value}<p/><br>`
    }
}
function checkFields(add , removeElm ,arrayName){
    if(add !== "" && removeElm !== ""){
        alert("Can't add and remove at the same time!")
    }
    if(arrayName == "empty"){
        alert('You must choose catagory!')
    }
}