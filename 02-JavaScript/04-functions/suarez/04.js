function Pastries(num, PiecesInKg) {
  let x = num / PiecesInKg;
  return x;
}
let z = Pastries(90, 15);
console.log("You need to bake a total" + " " + z + " " + "Kg");
