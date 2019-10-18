// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
var females = ["Fooz","Houda","Ons"];
// -name of males in your class
var males = ["Abdelsalam","Allam","Fares","Maher","Mohamed","Zied"];
// -name of your class instructors 
var instructors = ["Seif","Youssef","Matt","Tamara","Hugh"];
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle(array) {
	var middIndex = Math.floor(array.length / 2);
	return array[middIndex];
}
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function timesTwo(array) {
	for(var i = 0; i < array.length; i++) {
		if(i % 2 === 0) {
			array[i] *= 2;
		}
	}
	return array;
}