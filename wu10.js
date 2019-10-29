var count = 0;
$('button').on('click', function() {
	$('ul').append("<li>",$('input').val(),"</li>").addClass(function() {
		
		var class1 = "class1";
		var class2 = "class2";
		if (count === 0) {
			count ++ ;
			return class1
		} else if (count === 1) {
			count --;
			return class2
		}
	})
})