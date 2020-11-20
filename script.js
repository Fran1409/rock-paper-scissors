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
        
        console.log (i);
        console.log(computerChoice);
    };

    //first get computers choice when play is clicked
    document.getElementById("play").addEventListener("click", computerPick);
