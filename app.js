    let userScore=0;
    let compScore=0;

    const choices = document.querySelectorAll(".choice");
    const msg= document.querySelector("#msg");
    const userChoicePara=document.querySelector("#user-score");
    const compChoicePara=document.querySelector("#comp-score");

    const drawGame=()=>{
       
        msg.innerText="game was draw . play agian!";
    };

    const showWinner=(userWin,userChoice,compChoice)=>{
        if(userWin){
            userScore++;
            userChoicePara.innerText= userScore;
          
            msg.innerText=`you win! your ${userChoice}beats ${compChoice}`;
            msg.style.backgroundColor ="green";
        }else{
            compScore++;
            compChoicePara.innerText= compScore;
           
            msg.innerText=`you win!  ${compChoice} your beats ${userChoice}`;
            msg.style.backgroundColor="red";
        }
        
    }

    const genCompChoice=()=>{
        const options =["rock","paper","scissors"];
        const randIdx= Math.floor(Math.random()* 3);
        return options [randIdx];
    };

    const playGame=(userChoice)=>{
        console.log("user choice =", userChoice);
        //generate computer choice 
        const compChoice = genCompChoice();
        console.log("comp choice=", compChoice);

        if(userChoice=== compChoice){
        drawGame();    
        }else{
            let userWin = true;
            if (userChoice==="rock"){
                userWin= compChoice==="paper" ? false : true;
            }else if(userChoice==="paper"){
                userWin=compChoice==="scissors"? false : true;
            }else{
                userWin=compChoice==="rock" ? false: true;
            }
            showWinner(userWin, userChoice, compChoice); 
        }
    };


    choices.forEach((choice)=>{

        choice.addEventListener("click",()=>{
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        });
    }); 