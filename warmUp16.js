// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.

function ballonInstances(text) {
	var lower = text.toLowerCase();
	var bCount = 0;
	var aCount = 0;
	var lCount = 0;
	var oCount = 0;
	var nCount = 0;

	if(lower.length < 1 || lower.length > 10000) {
		return "Wrong Length";
	}

	for(var i = 0; i < lower.length; i++) {
		if(lower[i] === "b") {
			bCount ++
		} else if(lower[i] === "a") {
			aCount ++
		} else if(lower[i] === "l") {
			lCount ++
		} else if(lower[i] === "o") {
			oCount ++
		} else if(lower[i] === "n") {
			nCount ++
		}
	}

	lCount = Math.floor(lCount / 2);
	oCount = Math.floor(oCount / 2);
    
    return Math.min(bCount, aCount, lCount, oCount, nCount)
}