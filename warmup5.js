// 1-create a data model to represent your classmates
//     -think of different attributes of your classmates? what do all of them have ?
//     -create a factory function.
function classmate(name, background, englishLevel, age, aspiration) {
	return {
		name: name,
		background: background,
		englishLevel: englishLevel,
		age: age,
		aspiration: aspiration
	}
}
//     -create an array to hold the classmates that you created and what you created to it .
var mate1 = classmate("Firas", "Physics", "medium", 28, "frontEnd developper");
var mate2 = classmate("Anas", "IT", "andvanced", 30, "frontEnd developper");
var mate3 = classmate("Mahdi", "Java", "medium", 33, "fullStack developper");
var mate4 = classmate("Maher", "Chemistry", "medium", 26, "fullStack developper");

var classmates = [mate1,mate2,mate3,mate4];
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend(mate) {
	return mate.name + " is " + mate.age + " years old, he has a background in " + mate.background + " with " + mate.englishLevel +" level of english and he's aspiring to become a "+ mate.aspiration+"."
}
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
function addFriend(mate) {
	classmates.push(mate);
	return classmates;
} 
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
function nbOfMale(classmates) {
	var numMales = 0;
	for (var i = 0; i < classmates.length; i++) {
		numMales ++
	}
	return numMales;

}
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
function searchMates(query, arrayOfMates) {
	var matchingMates = [];
	for (var i = 0; i < arrayOfMates.length; i++) {
		if (arrayOfMates[i].age < query) {
			matchingMates.push(arrayOfMates[i]);
		}
	}
	return matchingMates;
}