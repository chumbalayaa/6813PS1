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
			setupGame(true, first, second);
		} else {
			setupGame(false, first, second);
		}
	};

	var populateBottom = function(correct, first, second) {
		var answerCount = $('.englishPopulate').length;
		if (answerCount != $('.spanishPopulate').length){
			location.reload();
		}
		if (answerCount != $('.answerPopulate').length){
			location.reload();
		}
		var firstSpanish = $(".spanishPopulate").first();
		var firstEnglish = $(".englishPopulate").first();
		var firstAnswer = $(".answerPopulate").first();
		if (answerCount <= 8) {
			//Simply prepend a combination
			$("<p>Hi</p>").insertBefore(firstSpanish);
		} else {

		}
	};

	var setupGame = function(correct, first, second) {	
		if (correct) {
			//populate with blue word, blue word, and check
			populateBottom(true, first, bottom);
		} else {
			//populate with red word, crossed red word, and red word 
			populateBottom(false, first, second);
		}
		//Clear input
		$("#englishInput").val("");
		//Get new random
		runGame(function() {
			//Refocus input
			$("#englishInput").focus();
		});
	};

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
