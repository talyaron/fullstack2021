const nir = {
    name: 'nir',
    lastName: 'nisim',
    gender:true,
    english: 90,
    Physics: 70,
    technology: 90,
    electricity: 75,
}

const aviel = {
    name: "aviel",
    lastName: 'rasin',
    gender:true,
    english: 100,
    Physics:70,
    technology:80,
    electricity:70,
    
}

const tamir = {
    name: "tamir",
    lastName: 'dadon',
    gender:true,
    english: 80,
    Physics:100,
    technology: 90,
    electricity: 75,
    
}

const tair = {
    name: "tair",
    lastName: 'hania',
    gender:false,
    english: 90,
    Physics:70,
    technology:90,
    electricity:50,
    
}



function tellAboutTheStudent(student) {
    if (student.gender) {
        console.log(`${student.name} ${student.lastName}  Scores in ${student.english}-english and 
         ${student.technology}-technology and  ${student.Physics}-Physics and  ${student.electricity}-electricity ${student.name}
          is a smart student`)
        }else {
            console.log(`${student.name} ${student.lastName} Scores in ${student.english}-english and 
            ${student.technology}-technology and  ${student.Physics}-Physics and  ${student.electricity}-electricity ${student.name}
              is a smart student`)
        }
};

tellAboutTheStudent(tair);
tellAboutTheStudent(tamir);
tellAboutTheStudent(aviel);
tellAboutTheStudent(nir);