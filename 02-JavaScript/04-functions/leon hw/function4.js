/*i created a function that calculate students gardes average*/
function gradesAvg(grades) {
    let count = 0;
    for (let i = 0; i < grades.length; i++) {
      count += grades[i];
    }
    return count / grades.length;
  }
  
  let arr = [100, 75, 55];
  console.log(gradesAvg(arr));
  