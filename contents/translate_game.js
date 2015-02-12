// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
$(function() {
	var lang_to		  = "English";
	var lang_from	  = "Spanish";
	var current_dict  = dicts[lang_to][lang_from]; // keys: words in @lang_to, values: corresponding words in @lang_from 	

	// Your code here
	var checkMatch = function(first, second) {
		if (current_dict[second] == first) {
			return true;
		} else {
			return false;
		}
	};

	var submitAction = function() {
		//Check match
		var second = $("#englishInput").val(),
		    first  = $("#spanishCurrent").text();
		if (checkMatch(first, second)) {
			setupGame(true);
		} else {
			setupGame(false);
		}
	};

	var setupGame = function(correct) {	
		if (correct) {
			//populate with blue word, blue word, and check

		} else {
			//populate with red word, crossed red word, and red word 

		}
		//Clear input
		$("#englishInput").val("");
		//Get new random
		runGame(function() {
			//Refocus input
			$("#englishInput").focus();
		});
	}

	var runGame = function(cb) {
		//Find random value
		var length = Object.keys(current_dict).length;
		var random = Math.floor(Math.random()*length);
		var count = 0;
		for (var key in current_dict) {
			if (count == random) {
				var ranValue = current_dict[key];
			}
			count ++;
		}		
		//Set the random value
		$("#spanishCurrent").text(ranValue);
		cb();
	};

	//Global actions
	$("#submitButton").click(submitAction);
	runGame(function() {});
});
