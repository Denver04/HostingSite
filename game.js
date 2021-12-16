
// alert("hello");

let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let level =0;
let started = false;
$(document).on("keypress",function(){
    if(!started){
        $("#level-title").text("level "+level);
        nextSequence();
        started=true;
    }
})

let userClickedPattern = [];
$(".btn").on("click",function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    // console.log(userClickedPattern)
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
})

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]=== userClickedPattern[currentLevel]){
        // console.log('success')
    
        if(gamePattern.length===userClickedPattern.length){
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }
    else{
        let audio=new Audio("sounds/wrong.mp3");
        audio.play;
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
            $("#level-title").text("Game-Over,Press any key to start")
        }, 500);
        startOver();
    }
}


function nextSequence() {
    userClickedPattern=[];
    level++;
    $("#level-title").text("level "+level);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColoulour);;
    animatePress(randomChosenColour);
}

function playSound(nam){
    nam1=new Audio("sounds/" + nam + ".mp3");
    nam1.play();
}



function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")
    },100);
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}
