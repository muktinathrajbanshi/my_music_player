let divLength = document.querySelectorAll(".song").length;
console.log(divLength);


for (let i = 0; i < divLength; i++) {

    const demo = document.querySelectorAll(".song")[i];
    demo.addEventListener("click", playsong);

}

let song1 = new Audio();
song1.src = "music/back_to_your_side.mp3";

let song2 = new Audio();
song2.src = "music/can_a_promise_be_undone.mp3";

let song3 = new Audio();
song3.src = "music/fly_like_that.mp3";

let song4 = new Audio();
song4.src = "music/back_to_your_side.mp3";

let song5 = new Audio();
song5.src = "music/back_to_your_side.mp3";

let song6 = new Audio();
song6.src = "music/back_to_your_side.mp3";

let song7 = new Audio();
song7.src = "music/back_to_your_side.mp3";

let song8 = new Audio();
song8.src = "music/back_to_your_side.mp3";

let song9 = new Audio();
song9.src = "music/back_to_your_side.mp3";

function playsong() {
    let songId = this.innerHTML;

    switch (songId) {
        case "a":
            song1.play();
            break;

        case "b":
            song2.play();
            break;
        
        case "c":
            song3.play();
            break;    
            
    
        default:
            console.log("wrong input");
            break;
    }
}