let divLength = document.querySelectorAll(".song").length;
console.log(divLength);


for (let i = 0; i < divLength; i++) {

    const demo = document.querySelectorAll(".song")[i];
    demo.addEventListener("click", playsong);

    const demo1 = document.querySelectorAll(".song")[i];
    demo.addEventListener("dblclick", pausesong);

}

let song1 = new Audio();
song1.src = "music/you_are_my_light.mp3";

let song2 = new Audio();
song2.src = "music/can_a_promise_be_undone.mp3";

let song3 = new Audio();
song3.src = "music/fly_like_that.mp3";

let song4 = new Audio();
song4.src = "music/lost_in_your_eyes.mp3";

let song5 = new Audio();
song5.src = "music/silk_and_fire.mp3";

let song6 = new Audio();
song6.src = "music/slowly_tonight.mp3";

let song7 = new Audio();
song7.src = "music/top_of_the_game.mp3";

let song8 = new Audio();
song8.src = "music/velvet_nights.mp3";

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
         
        case "d":
            song4.play();
            break;   
            
        case "e":
            song5.play();
            break;     
            
        case "f":
            song6.play();
            break;    

        case "g":
            song7.play();
            break;  

        case "h":
            song8.play();
            break; 

        case "i":
            song9.play();
            break;     


        default:
            console.log("wrong input");
            break;
    }  
}

function pausesong() {
    let songId = this.innerHTML;
    

    switch (songId) {
        case "a":
            song1.pause();
            break;

        case "b":
            song2.pause();
            break;
        
        case "c":
            song3.pause();
            break;    
         
        case "d":
            song4.pause();
            break;   
            
        case "e":
            song5.pause();
            break;     
            
        case "f":
            song6.pause();
            break;    

        case "g":
            song7.pause();
            break;  

        case "h":
            song8.pause();
            break; 

        case "i":
            song9.pause();
            break;     


        default:
            console.log("wrong input");
            break;


    }
}