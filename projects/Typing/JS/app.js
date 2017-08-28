const testWrapper=document.querySelector(".text-wrapper");
const textArea=document.querySelector("#text-area");
const originText=document.querySelector("#origin-text p").innerHTML;
const  resetButton=document.querySelector("#reset");
const theTimer=document.querySelector(".timer");

var timer=[0,0,0,0];

function leadingZero(time){
    if(time<9){
        time="0"+time;
    }
    return time;
}
//run a standard minute/second/hundredths timer
function runTimer(){
    let currentTime=leadingZero(timer[0])+ ":" +leadingZero(timer[1])+ ":" +leadingZero(timer[2]);
    theTimer.innerHTML=currentTime;
    timer[3]++;

    timer[0]=Math.floor((timer[3]/100)/60);
    timer[1]=Math.floor((timer[3]/100)-(timer[0]*60));
    timer[2]=Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));
}

//match the text entered with the provided text in the area
function spellcheck(){
    let textEntered=textArea.value;
    let originTextMatch=originText.substring(0,textEntered);
    if(textEntered==originText){
        testWrapper.style.border="8px solid #423456";
    } else {
        if(textEntered===originTextMatch){
            testWrapper.style.border="9px solid #411156";
        } else{
            testWrapper.style.borderColor="8px solid #eeeds3";
        }
    }
    console.log(textEntered);
}

//start the timer
function start(){
    let textEnteredLength=textArea.value.length;
    if(textEnteredLength===0){
        setInterval(runTimer,10);
    }
    console.log(textEnteredLength);
}
// reset everything

function reset(){
    console.log("reset button has been presed!");
}

//event listner for keyboard input and reset
textArea.addEventListener("keypress",start,false);
textArea.addEventListener("keyup",spellcheck,false);
resetButton.addEventListener("click",reset,false);