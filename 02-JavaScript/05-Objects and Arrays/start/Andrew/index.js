//1) create objects which describe your family (an object for each family member).
let andrew = {
    name: "Andrew",
    lastName: "Lishafay",
    age: 26
};
let andrey = {
    name: "Andrey",
    lastName: "Lishafay",
    age: 52
};
let margarita = {
    name: "Margarita",
    lastName: "Shilo",
    age: 52
};
let adam = {
    name: "Adam",
    lastName: "Lishafay",
    age: 13
};
//2) add the objects to an array called family (array which contains objects)
let family = [andrew,adam,andrey,margarita];
//3) loop through the array, and print the name of each member.
for (let i = 0; i < family.length; i++){
    alert(family[i].name);
}
//4) add to each object of members in your family, the list of his friends (array under the object)
andrew.friends = ["Guy","Shirel","Tomer","Moshe"];
andrey.friends = ["Yevgeni","Yuri","Sharon","Tal"];
margarita.friends = ["Rotem","Edna","Shiruklahat","Eli"];
adam.friends = ["Dror","Tamir","Gir","Hamorabi"];
//5) with a loop, print again the names of the family members, and all their friends. (for instance, "Mosh, had the following friends: David, Boaz, and Ruth")
let names = "";
for (let i = 0; i< family.length; i++){
    for (let j = 0; j<family[i].friends.length; j++){
        names = names+" "+family[i].friends[j];
    }
    alert(`${family[i].name} has the following friends: ${names}`);
    names = "";
}
//6) set the previous parts into a function, so later, you can enter more families.
function tellFriends(person){
    for (let j = 0; j<person.friends.length; j++){
        names = names+" "+person.friends[j];
    }
    alert(`${person.name} has the following friends: ${names}`);
}
