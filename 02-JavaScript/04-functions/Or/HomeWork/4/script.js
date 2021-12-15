//calories calc
function calories(breakfast, lunch, dinner){
let y=breakfast +lunch +dinner;
if (y < 2200)
return `you ate ${y} calories today you have ${2200-y} calories left to eat today.`
else return `you ate ${y} calories today you have passed the calorie limit by ${y-2200} calories`
}
//choose the number of calories you ate each meal.
let y= calories(295, 1120, 350)
console.log(y)