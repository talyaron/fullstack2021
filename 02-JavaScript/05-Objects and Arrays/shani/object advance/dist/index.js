var fullStackClass = {
    lessons: [
        {
            title: 'Objects - advance',
            grades: []
        }
    ]
};
var students = ['moshe, ahron, miriam', 'dan', 'levi'];
//create a function which genrate random grades between 40 and 100 for all students (make the score an integer).
//at the end the object should look somthing like that:
fullStackClass = {
    lessons: [{
            title: 'Objects - advance',
            grades: [
                {
                    name: 'moshe',
                    grade: 45
                },
                {
                    name: 'ahron',
                    grade: 67
                },
                {
                    name: 'miriam',
                    grade: 78
                },
                {
                    name: 'dan',
                    grade: 45
                },
                {
                    name: 'levi',
                    grade: 45
                }
            ]
        }
    ]
};
//create an internal function to the object
