

var randomNumber1 = Math.floor (Math.random()*6 + 1);
var randomNumber2 = Math.floor (Math.random()*6 + 1);

console.log(randomNumber1);
console.log(randomNumber2);

var newPathImg1 = "./images/dice"+randomNumber1+".png"
var newPathImg2 = "./images/dice"+randomNumber2+".png"

console.log(newPathImg1);
console.log(newPathImg2);

document.querySelector(".img1").setAttribute("src",newPathImg1);
document.querySelector(".img2").setAttribute("src",newPathImg2);


if( randomNumber1 > randomNumber2 ){
    document.querySelector("h1").textContent = "🚩 Player 1 Win!"
}
else if ( randomNumber1 < randomNumber2 ){
    document.querySelector("h1").textContent = "Player 2 Win! 🚩"
}
else{    document.querySelector("h1").textContent = " 🤝 Draw! 🤝 "
}