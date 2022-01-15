interface Class  {        
    lessons: Array<{
        title: string,
        grades: Array<any>
    }>
}
const fullStacClass: Class = {

    lessons: [
        {
        title: 'Objects - advance',
        grades: []
    }
    ]
}
const students= ['moshe', 'chaim', 'yosef', 'david', 'gadi'];

//const newgrade= createrandomgradefunc(70,80,90,100,60)