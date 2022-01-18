interface Class {
  lessons: Array<{
    title: string;
    grades: Array<any>;
  }>;
  createRandomGrades?: any;
}

const students: Array<string> = ["moshe", "ahron", "miriam", "dan", "levi"];

let fullStackClass: Class = {
  lessons: [
    {
      title: "Objects - start",
      grades: [],
    },
    {
      title: "Objects - advance",
      grades: [],
    },
    {
      title: "Forms",
      grades: [],
    },
  ],
  createRandomGrades: function (students: Array<string>): Class {
    this.lessons.forEach((lesson) => {
      students.forEach((student) => {
        const score = getRandomGrade();

        lesson.grades.push({ name: student, grade: score });
      });
    });

    return this;
  },
};

let UXClass: Class = {
  lessons: [
    {
      title: "strategy",
      grades: [],
    },
    {
      title: "scope",
      grades: [],
    },
  ],
};

function createRandomGrades(classObj: Class, students: Array<string>): Class {
  classObj.lessons.forEach((lesson) => {
    students.forEach((student) => {
      const score = getRandomGrade();

      lesson.grades.push({ name: student, grade: score });
    });
  });

  return classObj;
}

function getRandomNumber() {
  return Math.random() * 200;
}

const resultsUX: Class = createRandomGrades(UXClass, students);

console.log(resultsUX);
// console.log(resultsFS);

console.log(fullStackClass.createRandomGrades(students));

function renderLessons(classObj: Class, domElement: any) {
  let html: string = "";

  classObj.lessons.forEach((lesson) => {
    let lessonHTML = `<divclass='card'><h2 style='color: red;'>${lesson.title}</h2>`;

    lesson.grades.forEach((student) => {
      lessonHTML += `<p>${student.name}:  <span style='color: blue;'> ${student.grade} </span></p>`;
    });

    lessonHTML += "</div>";
    html += lessonHTML;
  });

  domElement.innerHTML = html;
}

const root = document.querySelector("#rootLessons");

renderLessons(fullStackClass, root);

function getRandomGrade(max = 100, min = 40) {
  const diffrence = max - min;

  return Math.round(Math.random() * diffrence + min);
}
