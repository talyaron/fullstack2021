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

for (let i in students){
    fullStacClass.lessons[0].grades[i]= {name:students[i], grade: createrandomgradefunc(40,100)};
}
    function createrandomgradefunc(mingrade, maxgrade){
   return Math.floor(Math.random()*(maxgrade-mingrade+1)+mingrade);
    }
    console.log (fullStacClass);

