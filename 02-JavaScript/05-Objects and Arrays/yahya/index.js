//const garde ={
//    math:22,
//    englesh:65,
//    physics:70,
//    larabic:80,
//    lhebrew:73,
//    isSucsses:false
//  
//
//}
//unction studentGrad(student){
//   if (student.isSucsses) {
//       console.log(`${student.math} ${student.englesh}${student.physics} ${student.larabic}${lhebrew}${student.isSucsses}`)
//   } else{ 
//       console.log(`${student.math} ${student.englesh}${student.physics} ${student.larabic}${lhebrew}${student.isSucsses}`)    
//
//   }
//;
//tudentGrad(garde);
////////////////////////////////////////////////////////////////////////////
// month

//let num = window.prompt("enter the month number")
//function munth(num)
//i=parsent(i)
//{
//    let list=["مُحرّم,صفر,ربيع اول,ربيع ثاني,جمادي اول,جمادي اخر,رجب,شعبان ,رمضان,شوال,ذو حجة,ذوالقعدة "]
//
//return console.log(list[i+1])
//}
//
//
//munth(num)
///////////////////////////////////////////////////////////////////////////////////

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=>1<=<<<<<<<<<<<<<<<<<<<<<<<
//let Yahya= {
//    name: "Yahya",
//    lastName: "alhawajra",
//    age: 19
//};
//let Monder= {
//    name: "Monder",
//    lastName: "alhawajra",
//    age: 18
//};
//let Taher = {
//    name: "Taher",
//    lastName: "alhawjra",
//    age: 15
//};
//
////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=>2<=<<<<<<<<<<<<<<<<<<<<<<<
//let family = [yahya,Taher,Monder];
////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=>3<=<<<<<<<<<<<<<<<<<<<<<<<
//for (let i = 0; i < family.length; i++){
//    alert(family[i].name);
//}
////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=>4<=<<<<<<<<<<<<<<<<<<<<<<<
//Yahya.friends = ["Islam","Nassar","Dahaam"];
//Monder.friends = ["Ibraheem"];
//Taher.friends = ["Mohamed","Omar"];
////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=>5<=<<<<<<<<<<<<<<<<<<<<<<<
//let names = "";
//for (let i = 0; i< family.length; i++){
//    for (let j = 0; j<family[i].friends.length; j++){
//        names = names+" "+family[i].friends[j];
//    }
//    alert(`${family[i].name} has the following friends: ${names}`);
//    
//}
////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>=>6<=<<<<<<<<<<<<<<<<<<<<<<<
//function tellFriends(person){
//    for (let j = 0; j<person.friends.length; j++){
//        names = names+" "+person.friends[j];
//    }
//    alert(`${person.name} has the following friends: ${names}`);
//}
const movies = [
    {
      name: "The Shawshank Redemption",
      director: "Frank Darabont",
      rating: 9.2,
      year: 1994,
    },
    {
      name: "Angry Men",
      director: "Sidney Lumet",
      rating: 8.9,
      year: 1957,
    },
    {
      name: "The Godfather ",
      director: "Francis Ford Coppola",
      rating: 9.1,
      year: 1972,
    },
    {
      name: "The Godfather: Part II ",
      director: "Francis Ford Coppola",
      rating: 9.0,
      year: 1974,
    },
    {
      name: "The Dark Knight",
      director: "Christopher Nolan",
      rating: 9.0,
      year: 2008,
    },
  
    {
      name: "Schindler's List",
      director: "Steven Spielberg",
      rating: 8.9,
      year: 1993,
    },
  ];
  const sortRatin = movies.sort((a, b) => (a.rating < b.rating ? 1 : -1));
  console.log(sortRatin);
  // *****
  const sortYear = movies.sort((a, b) => (a.year > b.year ? 1 : -1));
  console.log(sortYear);
  // *****
  
  let movieName = window.prompt("Please enter the name of the movie:");
  let newRating = window.prompt("Please enter the new ranking of the movie:");
  
  function changeRanking(movieName, newRating) {
    if (movieName == title) {
      let wantedMovie = movies.findIndex((movie) => movie.name == title);
      movies[wantedMovie].rating = newRating;
    }
  }
  console.log(`the new ranked order to ${movieName} is ${newRating} `);
  