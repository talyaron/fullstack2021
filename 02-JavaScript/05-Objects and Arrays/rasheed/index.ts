///1)

const age = 12;
const x = { age }
x.age = 13;
x["age"] = 15;
x[age] = 16;

// console.dir(x)


///2)

const key = ['aurthor', 'yearOfPublication', 'pages'];
const value = ['robirt', '2003', '500']


const object:any = {};





    for (let i = 0; i<key.length ; i++) {
        object[key[i]] = value[i]
        



    }

console.log(object)
