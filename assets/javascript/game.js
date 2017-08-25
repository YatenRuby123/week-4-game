$(document).ready(function() {
	var ranNumber = Math.floor(Math.random() *101+19)
	// console.log(ranNumber); - it will generate number between 19 and 120
	//now assign value of this to random number : id--randomNumber
	
	$("#randomNumber").text(ranNumber); //this puts number for random number in the computer guess number
	

	//now we need to generate random number for each image which has to be between 1 and 12.
	
	var one = Math.floor(Math.random() * 11 + 1)
	// console.log(one);
	var two = Math.floor(Math.random() * 11 + 2)
	var three = Math.floor(Math.random() * 11 + 2)
	var four = Math.floor(Math.random() * 11 + 2)

	//now we need to put values to wins and losses
	//
	
	var win = 0;
	var loss = 0;
	var total = 0;

	$("#numberWins").text("Wins : " + win);
	$("#numberLosses").text("Losses : " + loss);


	//Now we should reset the game by creating function
	//
	function gameReset(){
		ranNumber = Math.floor(Math.random() * 101 + 19);
		console.log(ranNumber)
		$("#randomNumber").text(ranNumber);
		one = Math.floor(Math.random() * 11 + 1)
		two = Math.floor(Math.random() * 11 + 2)
		three = Math.floor(Math.random() * 11 + 2)
		four = Math.floor(Math.random() * 11 + 2)

		total = 0;
		$("#counter").text(total);
		}

		//incrementing the counter for win and loss
		
		function winner(){
			alert("You won the game!");
			win++;
			$("#numberWins").text("Wins : " +win)
			// $("#winLose").text("You Won!");
			gameReset();

		}
		function loser(){
			alert("You lost the game");
			loss++;
			// $("#winLose").text("You Lost!");
			$("#numberLosses").text("Losses : " +loss);
			gameReset();
				
		}

		//Set function for each click on the image and what will happen after clicked on the image
		//image 1
		
		$("#img1").on("click", function(){
			total = total + one;
			console.log("User total is :" + total);
			$("#counter").text(total);

			if(total == ranNumber){
				winner();
			}
			else if(total > ranNumber){
				loser();
			}
		})

		$("#img2").on("click", function(){
			total = total + two;
			console.log("User total is : " + total);
			$("#counter").text(total);

			if(total == ranNumber){
				winner();
			}
			else if(total > ranNumber){
				loser();
			}
		})

		$("#img3").on("click", function(){
			total = total + three;
			console.log("User total is :" + total);
			$("#counter").text(total);

			if(total == ranNumber){
				winner();
			}
			else if(total > ranNumber){
				loser();
			}
		})

		$("#img4").on("click", function(){
			total = total + four;
			console.log("User total is :" + total);
			$("#counter").text(total);

			if(total == ranNumber){
				winner();
			}
			else if(total > ranNumber){
				loser();
			}
		})
	                                  
});