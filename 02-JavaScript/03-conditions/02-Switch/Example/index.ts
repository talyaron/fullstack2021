enum Grades {
  excelent = "excelent",
  veryGood = "very_good",
  good = "good",
}

function getGrades(rank: string) {
  try {
    if (typeof rank !== "string")
      throw new Error("Input should be of type string");

    switch (rank) {
      case Grades.excelent:
        return "Your score is 100";
      case Grades.veryGood:
        return "Your score is about 90";
      case Grades.good:
        return "Your score is about 80";
      case "almost good":
        return "Your score is about 70";
      case "enough":
        return "Your score is about 60";
      case "almost enough":
        return "Your score is about 50";
      case "failed":
        return "Your score is about 40 or less";
      default:
        return `we dont know of such a grade (${rank}) `;
    }
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}

let grade = getGrades(Grades.veryGood);
console.log(grade);

function buildSelect() {
  try {
    const html = `<option value=${Grades.excelent}>${Grades.excelent}</option>
    <option value=${Grades.veryGood}>Very good</option>
    <option value=${Grades.good}>${Grades.good}</option>`;


    const root = document.querySelector("#grades");
    const result = document.querySelector('#result');

    if (!root) throw new Error("no Root in DOM");
    if (!result) throw new Error("no 'result' in DOM");
    root.innerHTML = html;
    root.addEventListener('change',(ev:any)=>{
        const resultText = getGrades(ev.target.value);
        console.log(resultText);
        result.innerHTML = resultText;
    })

  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}

buildSelect();
