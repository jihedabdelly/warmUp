// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
function numero(str, index, char) {
  var num = 0;
  for(var i = 0; i <= index; i++) {
  	if(str[i] === char) {
  		num = num +1;
  	}
  }
  return num;
}

function occurences(str) {
  var newStr = "";
  for(var i = 0; i < str.length; i++) {
  	newStr += numero(str, i, str[i]) 
  }
  return newStr
}

