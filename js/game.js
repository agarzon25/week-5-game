$(document).ready(function() {

	// Creating a variable for amount of seconds for the timer
	var seconds = 31;

	// Setting a variable for the question current question number
	var qn = 1;

	// variable to hold right guess count
	var right = 0;

	// variable to hold wrong guess count
	var wrong = 0;

	// questions object
	var questions = {
		q1 : {question: "question1", answer: "answer 1"},
		q2 : {question: "question2", answer: "answer 2"},
		q3 : {question: "question3", answer: "answer 3"}
 	};

 	// options object
	var options = {
		o1 : [questions.q1.answer, "guess2", "guess3", "guess4"],
		o2 : [questions.q2.answer, "guess2", "guess3", "guess4"],
		o3 : [questions.q3.answer, "guess2", "guess3", "guess4"],
	};	

	// Creating timer to give user 30 second to answer the question
	function timer() {
		seconds--;
		if (seconds<0) {
			clearInterval(tick);
		} else if (seconds === 0 && qn < Object.keys(questions).length) {
			seconds = 30;
			qn++;
			currentQuestion(qn)
		} 
		// print out time left on the clock
		$("#time").html(seconds)
	}

	//funtion for current question
	function currentQuestion(n) {

		// Display the current question
		$("#question").text(questions["q" + n].question)

		// Creating an empty array to hold all option elements
		var opts = [];

		// Creating a button div for each option
		options["o" + n].forEach(b => {
			
			console.log(b)
			btnType = $("<button class='btn btn-outline-danger btn-block' id='choice' value='"+ b +"'>")
			const btn = btnType.html(b)
			//btnType.attr("value", b)
			opts.push(btn)

		})

		// Append opts to answers div
		$("#answers").html(opts)
	
		guess()
	}

	function guess() {
		$("#answers").click(function() {
			$('#choice').each(function() {
				console.log($("#choice").attr("value"))
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

		// Hide start button
		$("#button").hide();
	}

	// Game play

	hideDivs();

	// click start to begin the game
	$("#button").click(function() {
		// Creating an element for interval variable
		var tick = setInterval(timer, 1000);
		showDivs();
		currentQuestion(qn);
		timer();
		//console.log(guess)
	})
})