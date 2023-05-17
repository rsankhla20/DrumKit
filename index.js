
// function anAddEventListener(typeOfEvent, callback){
//     var eventThatHappened = {
//         eventtype:"keypress"

//     }
//     if(eventThatHappened.eventtype===typeOfEvent){
//         callback(eventThatHappened);
//     }
// }

// anAddEventListener("keypress",function(event){
//     console.log("event"); } );



function playAudio(btnn){
    
    switch (btnn) {
        
            case "w":
                var audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
            break;
            case "a":
                var audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
            break;
            case "s":
                var audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
            break;
            case "d":
                var audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
            break;
            case "j":
                var audio = new Audio("./sounds/crash.mp3");
                audio.play();
            break;
            case "k":
                var audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
            break;
            case "l":
                var audio = new Audio("./sounds/snare.mp3");
                audio.play();
            break;
        default:
            break;
    }
}

function applyAnimation(btnn){
    var btnClass = document.querySelector("."+btnn);
    btnClass.classList.add("pressed");
    setTimeout(function(){btnClass.classList.remove("pressed");},100)
}
var lengthOfbutton = document.querySelectorAll("button").length;

for(var i=0;i<lengthOfbutton;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(event){
        var buttonPressed = this.innerHTML;
        console.log(buttonPressed);
        applyAnimation(buttonPressed);
        playAudio(buttonPressed);
});

}
    

document.addEventListener("keydown",function(event){
    var keyPressed = event.key;
    console.log(keyPressed);
    applyAnimation(keyPressed);
    playAudio(keyPressed);
});

