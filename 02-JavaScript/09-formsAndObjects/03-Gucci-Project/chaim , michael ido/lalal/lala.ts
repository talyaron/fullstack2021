interface obj {
    objects:Array<string>;
    objectsTwo:Array<string>; 
    sortByYear(list ,year)
}
interface item {
    year:number
    name:string
}

let object = {
    objectsTwo:[{year : 1990 , name : 'red' },{year : 1990 , name : 'black' },
    {year : 1992 , name : 'yellow' },{year : 1998 , name : 'yellow' },],

    objects:[{year : 1990 , name : 'red' },{year : 1990 , name : 'black' },
    {year : 1992 , name : 'yellow' },{year : 1998 , name : 'yellow' },],

    sortByYear(list ,year){
        return list.sort(item => item.year == year)
    },renderByYear(){
        this.sortByYear()
    }
}
const lala = object.objects;

object.sortByYear(object.objects,1998)