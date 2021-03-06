numSquares=6;
var colors=generateRandomColors(numSquares);
   
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
var main=document.getElementById("#stripe");
var flag=0;

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.background=colors[i];
        } else {
            squares[i].style.display="none";
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares=6;
     colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        
            squares[i].style.background=colors[i];
        
            squares[i].style.display="block";
        
    }
});


resetButton.addEventListener("click", function(){
    //generate all new colors
    colors=generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor=pickColor();
    //change colorDisplay to math picked color
    colorDisplay.textContent=pickedColor;
    //change colors of squres
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=colors[i];
    }
    h1.style.background='black';
})
colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
    //add initial colors to squares
    squares[i].style.background=colors[i];
    //add click listeners to square
    squares[i].addEventListener("click", function(){
        
        //grab color of clicked square
        var clickedColor=this.style.background;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            changeColors(clickedColor);
            messageDisplay.textContent="Correct!";
            resetButton.textContent="Play Again?";
            h1.style.background=pickedColor;
          stripe.style.background=pickedColor;
        } else {
            this.style.background="black";
            messageDisplay.textContent="Try Agian"
        }
        
    });
}
function changeColors(color){
    //loop thourgh all squares
    for(var i=0; i<squares.length; i++){
        squares[i].style.background=color;
    }
}
function pickColor(){
    var random=Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
 //make an array
 var arr=[];
 //add rum random colors to array
 for(var i=0;i<num;i++){
     //get random colors and push into arr
     arr.push(randomColor());
 }
 return arr;
}
function randomColor(){
    //pick a 'red' from 0-255
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);

    return "rgb("+r+", " +g+", " +b+")";
}