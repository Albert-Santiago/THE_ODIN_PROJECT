/*
    #1. Understanding the problem.

    rock > scissor
    rock < paper

    paper > rock 
    paper < scissor

    scissor > paper
    scissor < rock


    

    #2. Plan {
        * Create function called getComputerChoice
        * only console. 
        * theres no yet interface
        * need the input wheather uppercase or lowercase will same the input.

        
        * Done: first thing = search how to create a function that will randomnly return in three items;
                        ans: get the random number, and convert it to string using if else
        * Done: the program

        * Done: things I need : I need to loop the when the input the same value there is no execution and infinite loop until satisfies the condition
            ans: for loop.

        * Processing: when the player choose outside the choice, it is invalid turn. 
            invalid: space, special character

        * find the undefined that shows in the console.

    }



    #3. PsuedoCode {
        #1. Get the random value of 'Computer Choice'
            #1.1 and set that fucntion to variable. ex: let computerChoice = getComputerChoice()
        #2. Get the input value of 'Player Choice'
        #3. Create a function playRound with two parameters, first is for player choice second is for computer choice.
        #4 inside of a function playRound `think about the problem, in this case I think about the game how it is works`
            so I decided using conditional if else statement.
        #5. I used the function playRound and put the two arguments (Computer choice, Player choice).
        #6. I want it to repeat the game so I used For loop and looping in 5 loops.
        #7. After that it should have a winner. so i declared a variable outside in loop, but before that I created another function
            called game() without parameters. and put all  the necessary code inside. 
            #7.1. I declare variable for player, computer and set it into 0
            #7.2. I added another variable for draw count, and invalid count.

    }
        

    #4. slice into subproblems, dont solve in a whole, solve the subproblems.
    


*/

// function playRound(playerSele`Draw Count: ${drawCount}`tion, computerSelection) {

// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound())

// function user() {
//     const name = "Alex";
//     const age = "22";
//     const address = "Ph";
//     return name, age, address;
// }
// const func = user();
// console.log(func);

// getting random choice for computer
// function getComputerChoice() {
//     let randomNumb = Math.floor(Math.random() * 6) + 1;
//     if (randomNumb >= 1 && randomNumb <= 2) {
//         return "paper";
//     } else if (randomNumb >= 3 && randomNumb <= 4) {
//         return "rock";
//     } else if (randomNumb >= 5 && randomNumb <= 6) {
//         return "scissor";
//     } else {
//         return "pick between rock, paper or scissor";
//     }
// }

// function game() {
//     function getComputerChoice() {
//         let randomNumb = Math.floor(Math.random() * 6) + 1;
//         if (randomNumb >= 1 && randomNumb <= 2) {
//             return "paper";
//         } else if (randomNumb >= 3 && randomNumb <= 4) {
//             return "rock";
//         } else if (randomNumb >= 5 && randomNumb <= 6) {
//             return "scissor";
//         } else {
//             return "pick between rock, paper or scissor";
//         }
//     }
//     // to get the value who going to win
//     let player = 0;
//     let computer = 0;
//     let drawCount = 0;
//     let invalid = 0;
//     let playerName = prompt("Enter your name: ");

//     // loop 5 times
//     for (let i = 1; i <= 5; i++) {
//         // input
//         const playerSelection = prompt(
//             "Choose Rock, Scissor, Paper"
//         ).toLocaleLowerCase();

//         const computerSelection = getComputerChoice();

//         // to show what you and computer chose.
//         console.log(`${playerName}: ${playerSelection}`);
//         console.log("Computer: " + computerSelection);

//         // this function is the core. this is the game, this is the logic of the game,
//         function playRound(playerSelection, computerSelection) {
//             if (playerSelection == "rock" && computerSelection == "paper") {
//                 return `Rock is less than paper, Computer got a point. Computer total point/s: ${(computer += 1)}.`;
//             } else if (
//                 playerSelection == "paper" &&
//                 computerSelection == "rock"
//             ) {
//                 return `Paper is greater than rock, ${playerName} got a point. ${playerName} total point/s: ${(player += 1)}.`;
//             }

//             //
//             else if (
//                 playerSelection == "scissor" &&
//                 computerSelection == "rock"
//             ) {
//                 return `Scissor is less than rock, Computer got a point. Computer total point/s: ${(computer += 1)}.`;
//             } else if (
//                 playerSelection == "rock" &&
//                 computerSelection == "scissor"
//             ) {
//                 return `Rock is greater than scissor, ${playerName} got a point. ${playerName} total point/s: ${(player += 1)}.`;
//             }

//             //
//             else if (
//                 playerSelection == "paper" &&
//                 computerSelection == "scissor"
//             ) {
//                 return `Paper is less than scissor, Computer got a point. Computer total point/s: ${(computer += 1)}.`;
//             } else if (
//                 playerSelection == "scissor" &&
//                 computerSelection == "paper"
//             ) {
//                 return `Scissor is greater than paper, ${playerName} got a point. ${playerName} total point/s: ${(player += 1)}.`;
//             } else if (
//                 playerSelection != "rock" &&
//                 playerSelection != "paper" &&
//                 playerSelection != "scissor"
//             ) {
//                 return `Invalid choice, not counted, choose between the choices without spaces!, no answer considered invalid. Invalid total count/s: ${(invalid += 1)}.`;
//             } else {
//                 return `Same choice, not counted. Draw total count/s: ${(drawCount += 1)}.`;
//             }
//             //
//         }
//         console.log(playRound(playerSelection, computerSelection));
//     }
//     console.log(`${playerName} points: ${player}`);
//     console.log(`Computer points: ${computer}`);
//     console.log(`Draw Count: ${drawCount}`);
//     console.log(`Invalid choice Count: ${invalid}`);

//     function points() {
//         if (player > computer) {
//             console.log(`${playerName} is a Winner`);
//         } else if (player < computer) {
//             console.log("Computer is a Winner");
//         } else if (invalid == 5) {
//             console.log("Invalid!!!");
//         } else if (player == computer) {
//             console.log("Draw");
//         } else {
//             console.log("err");
//         }
//     }
//     points();
// }
// game();

let paper = document.getElementById('paper')
paper.addEventListener('click', playRound)
let rock = document.getElementById('rock')
rock.addEventListener("click", playRound);
let scissor = document.getElementById('scissor')
scissor.addEventListener("click", playRound);

function getComputerChoice() {
        let randomNumb = Math.floor(Math.random() * 6) + 1;
        if (randomNumb >= 1 && randomNumb <= 2) {
            return "paper";
        } else if (randomNumb >= 3 && randomNumb <= 4) {
            return "rock";
        } else if (randomNumb >= 5 && randomNumb <= 6) {
            return "scissor";
        } else {
            return "pick between rock, paper or scissor";
        }
    }
    // let computerSelection = getComputerChoice();
    let computerSelection = getComputerChoice();


function playRound(e) {
        if (e.target == paper) {
            if(computerSelection == 'rock') {
                console.log('Player got a point');
            } else if (computerSelection == 'paper') {
                console.log('draw')
            } else if (computerSelection == 'scissor') {
                console.log('Computer Got a point')
            } 
            
        } else if (e.target == rock) {
            if(computerSelection == 'rock') {
                console.log('draw')
            }
        } else if (e.target == scissor) {
            let scissor = "scissor";
            return scissor;
        }
}

    

    
// function getComputerChoice() {
//         let randomNumb = Math.floor(Math.random() * 6) + 1;
//         if (randomNumb >= 1 && randomNumb <= 2) {
//             return "paper";
//         } else if (randomNumb >= 3 && randomNumb <= 4) {
//             return "rock";
//         } else if (randomNumb >= 5 && randomNumb <= 6) {
//             return "scissor";
//         } else {
//             return "pick between rock, paper or scissor";
//         }
//     }
//     // let computerSelection = getComputerChoice();
//     let computerSelection = 'rock'


// function playRound(playerSelection, computerSelection) {
    
// }
// playRound(playerSelection, computerSelection);








// function getComputerChoice() {
//         let randomNumb = Math.floor(Math.random() * 6) + 1;
//         if (randomNumb >= 1 && randomNumb <= 2) {
//             return "paper";
//         } else if (randomNumb >= 3 && randomNumb <= 4) {
//             return "rock";
//         } else if (randomNumb >= 5 && randomNumb <= 6) {
//             return "scissor";
//         } else {
//             return "pick between rock, paper or scissor";
//         }
//     }
//     let computerSelection = getComputerChoice();

// function playRound(playerSelection, computerSelection) {
    
// }
// playRound(playerSelection, computerSelection)






// function game() {
//     function getComputerChoice() {
//         let randomNumb = Math.floor(Math.random() * 6) + 1;
//         if (randomNumb >= 1 && randomNumb <= 2) {
//             return "paper";
//         } else if (randomNumb >= 3 && randomNumb <= 4) {
//             return "rock";
//         } else if (randomNumb >= 5 && randomNumb <= 6) {
//             return "scissor";
//         } else {
//             return "pick between rock, paper or scissor";
//         }
//     }
//     function playRound(playerSelection, computerSelection) {
//         console.log("paper")
//     }
    
// }
// game();