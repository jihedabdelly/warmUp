// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"
function reverseWithNumbers(str) {
	var array = str.split('');
	var newArray = [];
	for(var i = 0; i < str.length; i++) {
   		newArray.push(array.pop(),i)
	}
	return newArray.join('').slice(0,newArray.length - 1)
}

// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLengthStrings(array) {
	var newArray = [];
	for(var i = 0; i < array.length; i++) {
		for(var j = i + 1; j < array.length; j++) {
			if (array[i].length === array[j].length) {
				newArray.push(array[i], array[j])
				array.splice(j,1);
				j++;
				array.splice(i,1);
				i++;
			}
		}
	}
	return newArray
}