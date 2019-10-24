// 1-using + operator combine your partner first and last name .
var first = "Hashem";
var last = "Buzer";
var full = first + " " + last;
// 2-find if the number 13 is a multiple of 3 or not.
if (13 % 3 === 0) {
	console.log("Multiple of 3");
} else {
	console.log("Not a multiple of 3");
}

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
function average(array) {
	var sum = 0;
	for (var elm of array) {
		sum = sum + elm;
	}
	return sum / array.length;
}
// average([13,14,13,15,16,17,19,13,16,15]) --> 15.1

// 4-calculate your age in seconds.
function ageInSecs(age) {
	return "My age is " + age * 365 * 24 * 60 * 60 + " seconds."
}
//ageInSecs(26) --> "My age is 819936000 seconds."

// your code is here