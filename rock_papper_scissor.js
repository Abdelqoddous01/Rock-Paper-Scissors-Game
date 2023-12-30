
document.addEventListener('DOMContentLoaded', function () {
    
    let wins = 0;
    let loses = 0;
    let ties = 0;
    let imogies = ["fa-hand-fist", "fa-hand", "fa-hand-scissors"];
    let computer = document.getElementById('computer');
    let rock = document.getElementById('rock');
    let paper = document.getElementById('paper');
    let scissors = document.getElementById('scissors');
    let start=document.getElementById('start');
    let h1=document.getElementById('counter');
    let choice_computer;
    let store_choice_c;
    let store_choice_p;
    let begining="Lets Go";
    let counter = 0;
  

    rock.addEventListener('click',()=>change_bg("rock","paper","scissors"));
    paper.addEventListener('click',()=>change_bg("paper","rock","scissors"));
    scissors.addEventListener('click',()=>change_bg("scissors","paper","rock"));


    document.getElementById('start').onclick=function(){
        disable_buttons(false);
        reset_settings();
        start_counter();
    }


    function reset_settings(){
        choice_computer=Math.floor(Math.random() * 3);
        store_choice_c=null;
        store_choice_p=null;
        counter=0;
        document.getElementById("rock").style.backgroundColor = 'black';
        document.getElementById("paper").style.backgroundColor = 'black';
        document.getElementById("scissors").style.backgroundColor = 'black';
        document.getElementById("computer").style.backgroundColor = 'black';
        computer.innerHTML=`<i class="fa-solid fa-question imogie">`;
        start.innerHTML="Playing";
    }

    function start_counter(){
        function updateCounter() {
            h1.innerHTML=counter;
            counter++;
    
            if (counter > 3) {
                store_counter=counter;
                h1.innerHTML=begining;
                clearInterval(intervalId);
                main();
                start.innerHTML="Play Again";
                console.log("Player choice = "+store_choice_p);
                console.log("Computer choice = "+store_choice_c);
            }
        }
        let intervalId = setInterval(updateCounter, 1000);
    }



    function change_imogie(){
        for(let i=0;i<=30;i++){

            for(let j=0;j<3;j++){
                computer.innerHTML=`<i class="fa-solid ${imogies[j]} imogie"></i>`;     
            }
            if(i==30){
                computer.innerHTML=`<i class="fa-solid ${imogies[choice_computer]} imogie"></i>`;
                switch (choice_computer){
                    case 0:
                        store_choice_c="rock";
                        break;
                     case 1:
                        store_choice_c="paper";
                        break;
                     case 2:
                         store_choice_c="scissors";
                         break;
                    default:
                        store_choice_c="NULLL";
                }
            }
        }
    }

    function change_bg(tochange, stable1, stable2) {
        document.getElementById(tochange).style.backgroundColor ='rgba(243, 241, 112, 0.965)';
        document.getElementById(stable1).style.backgroundColor = 'black';
        document.getElementById(stable2).style.backgroundColor = 'black';
        store_choice_p=tochange;
    }
    
    function main(){
        change_imogie();
        winner();
        
    }



    function visual_results(id,co){
        document.getElementById(id).style.backgroundColor=co;
    }



    function winner(){
        if (
            (store_choice_p === "rock" && store_choice_c === "scissors") ||
            (store_choice_p === "paper" && store_choice_c === "rock") ||
            (store_choice_p === "scissors" && store_choice_c === "paper")
        ) {
            wins += 1;
            document.getElementById("wins").innerText = "Wins: " + wins;
            visual_results(store_choice_p,"green");
            visual_results("computer","red");
        } else if (
            (store_choice_p === "scissors" && store_choice_c === "rock") ||
            (store_choice_p === "rock" && store_choice_c === "paper") ||
            (store_choice_p === "paper" && store_choice_c === "scissors")
        ) {
            loses += 1;
            document.getElementById("loses").innerText = "Loses: " + loses;
            visual_results(store_choice_p,"red");
            visual_results("computer","green");
        } else if(store_choice_c === store_choice_p){
            ties += 1;
            document.getElementById("ties").innerText = "Ties: " + ties;
            visual_results(store_choice_p,"grey");
            visual_results("computer","grey");
        }
        else{
            loses++;
            document.getElementById("loses").innerText = "Loses: " + loses;
            visual_results("rock","red");
            visual_results("paper","red");
            visual_results("scissors","red");
            visual_results("computer","green");
        }
        disable_buttons(true);
    }

    function disable_buttons(propretie){
        rock.disabled=propretie;
        paper.disabled=propretie;
        scissors.disabled=propretie;
    }
    
});





