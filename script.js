    
    //declare variables
    let yourChoice = "";
    let computerChoice = "";   
    
    //get players choice
   function choice_click(clicked) { 
        yourChoice = clicked; 
        console.log(yourChoice);
    };   

    //get computers choice
    function getRndNumber(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      };

    function computerPick () {
        let i = getRndNumber(1, 4);

        if ( i == 1) {
            computerChoice = "rock"
        }
        else if (i == 2) {
            computerChoice = "paper"
        }
        else if (i == 3) {
            computerChoice = "scissors"
        }

        return computerChoice;
    };

    //compare choices 
    function compareChoices() {
        computerPick();
        console.log(yourChoice + computerChoice);

        if ( yourChoice === computerChoice) {
            console.log("tie");
        }
        else if ( yourChoice === "rock" && computerChoice !== "paper") {
            console.log("you win with rock");
        }
        else if ( yourChoice === "paper" && computerChoice !== "scissors") {
            console.log("you win with paper");
        }
        else if ( yourChoice === "scissors" && computerChoice !== "rock") {
            console.log("you win with scissors");
        }
        else {
            console.log("you lose");
        };
    };

    //first get computers choice when play is clicked
    document.getElementById("play").addEventListener("click", compareChoices);

    
