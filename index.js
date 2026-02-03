let divLength = document.querySelectorAll(".song").length;
console.log(divLength);

for (let i = 0; i < divLength; i++) {

    const demo = document.querySelectorAll(".song")[i];
    demo.addEventListener("click", playsong);

}

let song1 = new Audio();
song1.src = "music/back_to_your_side.mp3";

function playsong() {
    song1.play();
}