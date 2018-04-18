$(document).ready(function() {

	// Creating a variable for amount of seconds for the timer
	var seconds = 30;

	// Setting a variable for the question current question number
	var qn = 1;

	// variable to hold right guess count
	var right = 0;

	// variable to hold wrong guess count
	var wrong = 0;

	// questions object
	var questions = {
		q1 : {question: "question1", answer: "answer 1", options: ["answer 1", "guess2", "guess3", "guess4"]},
		q2 : {question: "question2", answer: "answer 2", options: ["answer 2", "guess2", "guess3", "guess4"]},
		q3 : {question: "question3", answer: "answer 3", options: ["answer 3", "guess2", "guess3", "guess4"]}
 	};	

	// Creating timer to give user 30 second to answer the question
	function timer() {
		seconds--;
		if (seconds<0) {
			clearInterval();
			return
		} else if (seconds === 0 && qn < Object.keys(questions).length) {
			seconds = 30;
			qn++;
			currentQuestion(qn);
			return
		}
		// print out time left on the clock
		$("#time").html(seconds)
	}

	//funtion for current question
	function currentQuestion(n) {

		// Display the current question
		$("#question").html(questions["q" + n].question)

		// Creating an empty array to hold all option elements
		var opts = [];

		// options variable

		options = questions["q" + n].options

		// Creating a button div for each option
		options.forEach( b => {
			
			console.log(b)
			btnType = $("<button data-name='" + b + "' class='btn btn-outline-danger btn-block answerButton'>" + b + "</button>")
			opts.push(btnType)
		})

		// Append opts to answers div
		$("#answers").html(opts)
	
	}

	function guess() {
		$("#answers").on("click", () => {
			// e.stopPropagation();
			$(".answerButton").each(function() {
				// console.log($(this))
				console.log($(this).attr("data-name"))
			})
		})
	}

	// Hide time, question, answers div when document loads

	function hideDivs() {
		$("#time").hide();
		$("#question").hide();
		$("#answers").hide();
	}

	// show time, question and answers divs
	function showDivs() {
		$("#time").show();
		$("#question").show();
		$("#answers").show();
		$("#button").hide();
	}

	// Game play

	hideDivs();

	// click start to begin the game
	$("#button").click(function() {
		// Creating an element for interval variable
		setInterval(timer, 1000);
		showDivs();
		if (qn > Object.keys(questions).length) {
			console.log("made it")
			hideDivs()
			$("#answers").html("Game Over!")
			return
		} else {
			currentQuestion(qn);
			guess();	
		}
		//timer();
		return
	})
})