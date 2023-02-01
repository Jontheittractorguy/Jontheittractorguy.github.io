function getComputerChoice() {
    const array=["rock","paper","scissors"];
    let rps = array[Math.floor(Math.random()*array.length)];
    return rps;
}
let cScore=0;
let pScore=0;
let head = document.getElementById('display');
let btns = document.getElementById('buttons');
let main = document.getElementById('h1');
let ready = document.getElementById('ready');
let playScore  = document.getElementById('player');
let compScore = document.getElementById('comp');
let win = document.getElementById('reset');
ready.onclick = ()=>begin();

let round = function (player){
    let comp = getComputerChoice();
    player = player.srcElement.className;
    if (player === comp){return game('draw')
        } else if(player === "rock" && comp === "scissors"){return game('p')
        } else if (player === "rock" && comp === "paper") {return game('c')
        } else if (player=== "paper" && comp ==="scissors") {return game('c')
        } else if (player=== "paper" && comp ==="rock"){return game('p')
        } else if (player=== "scissors" && comp ==="rock"){return game('c')
        } else {return game('p')};
};

function start(){
    let button = document.querySelectorAll('button');
    button.forEach(e => {
        e.addEventListener('click',round)
    });
}

function begin(){
    main.innerHTML = 'Let the Games <em>BEGIN</em>';
    ready.style.visibility = "hidden";
    btns.style.visibility = "visible";
}


function game(e){
    head.innerHTML = "";
    playScore.innerHTML = "Player score: " + pScore;
    if (e ==='draw'){
        head.innerHTML = "DRAW"
    } else if (e === 'p'){
        head.innerHTML = "Round goes to Player";
        pScore++;
        playScore.innerHTML = "Player score: " + pScore;
    } else if (e === 'c'){
        head.innerHTML = "Round goes to Demon";
        cScore++;
        compScore.innerHTML = "Computer score: " + cScore;
    };
    if (pScore===5){
        head.innerHTML = "You've defeated the demon and saved the world...<br>For now";
        head.className = "winner";
        stop();
    } else if (cScore===5){
        head.innerHTML = "Demon Wins...your <em>SOUL</em>!";
        head.className = "winner";
        stop();
    };
};    

function stop(){
    button = document.querySelectorAll('button').forEach(
        (e) => {e.style.visibility = "hidden";
        e.disabled = true});
    win.type = "button";
    win.onclick = ()=> window.location.reload();
};

window.onload = start();

        //function game(){
        //    let i = 0;
          //  for (let i=0;i<5;i++){
            //    let plyr=prompt("enter rock paper or scissors");
              //  let complyr=getComputerChoice()
                //if (round(plyr,complyr)===pScore){pScore+=1
                //} else {cScore+=1}
                //console.log("P: "+pScore +" C: "+cScore)
            //}
            //if (pScore>cScore) {return "Player wins with score "+pScore+" to "+cScore
            //} else if (pScore=cScore){return "DRAW"
            //} else {return "Computer wins with score "+cScore+" to "+pScore}
        //}

