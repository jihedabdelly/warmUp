// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
function copy(str, start){
	var newStr = "";
	while (str[start] !== " ") {
		newStr += str[start]
		start++
	}
	newStr += " "
	return newStr
}


function reverseStr(str) {
	var newStr = "";
	str += " ";
	var leng = str.length;
	var constLength = str.length;
	for(var i = length - 1; i >= 0; i--) {
		if(str[i] === " ") { 
			newStr += copy(str, i+1)
		} else {
			constLength++
		}
		
	}

	return newStr;
}


