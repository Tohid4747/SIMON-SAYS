let highscore=0;
let gamesequence=[];
let usersequence=[];
let btns=[ "yellow","green","red","purple"];


let started=false;
let level=0;

let H2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started== false){
        console.log("game started");
        started=true;
         levelup();
    }
   
});

function userFlash(btn){
btn.classList.add("userFlash");
setTimeout(function(){
    btn.classList.remove("userFlash");

},250)
}


function GameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");

},250)
}

function levelup(){
    usersequence=[];
    level++;
    H2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randcolor=btns[randIdx];
    let randBtn= document.querySelector(`.${randcolor}`);
    gamesequence.push(randcolor);
    console.log(gamesequence);
    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randBtn);
    GameFlash(randBtn);
    
}


function checkAns(idx){
    if(usersequence[idx] == gamesequence[idx]){
        if(usersequence.length == gamesequence.length){
            setTimeout(levelup, 1000);
        }
    } else {
       
        if(level > highscore){
            highscore = level;
        }

        H2.innerHTML = `Game over YOUR SCORE WAS <b>${level}</b>!<br>
                        Highest Score: <b>${highscore}</b><br>
                        Press any key to start.`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}


function btnPress(){
   console.log(this)
   let btn=this;
   userFlash(btn);
   usercolor=btn.getAttribute("id");
   usersequence.push(usercolor);
   checkAns(usersequence.length-1);


}
let allbtns=document.querySelectorAll(".btn");
for( let btn of allbtns){
    btn.addEventListener("click", btnPress);
    
}
function reset(){
    started=false;
    gamesequence=[];
    usersequence=[];
    level=0;

}