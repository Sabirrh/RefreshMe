// for FIrst Dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;   // Generating Random Number

var randomImage = "dice" + randomNumber1 + ".png" ;  //dice1.png - dice2.png

var randomImageSource = "images/" + randomImage; // images dice1 -dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" ,randomImageSource );


// For Second Dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + randomNumber2 + ".png" ;  //dice1.png - dice2.png

var randomImageSource2 = "images/" + randomImage1; // images dice1 -dice6

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);


// GameChanger Part

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= " ⛳Player1 Won!";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player2 Won⛳ !" ;
}else{
    document.querySelector("h1").innerHTML = "Draw!" ;
}