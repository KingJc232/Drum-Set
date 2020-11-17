let buttons = document.querySelectorAll(".drum"); //Getting all the Buttons with the Drum Class

buttons.forEach(button =>{
    //Adding a Listener for each Button 
    button.addEventListener("click", function()
    {
        let keyUsed = this.textContent;
        //Calling our Function 
        playSound(keyUsed);
        buttonAnimation(keyUsed);
    });    
});

//Adding a Listener To The Entire Html Document 
document.addEventListener("keydown", function(event)
{
    //Passing the Event that occurred to know which key caused it 
    playSound(event.key); //Calling our playSound With the Specified Key 
    buttonAnimation(event.key); //Calling our buttonAnimation Function Which Does an Animation when the button pressed
});

/** Plays the correct Sound Depending on the Key pressed*/ 
function playSound(key)
{   
    console.log(key);
    switch(key)
    {
        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play(); 
            break;
        default:
            //DO NOTHING 
    }
}

/**Creating a Function which Does an Animation 
 * Depending on the Key passed 
 */

 function buttonAnimation(currentKey)
 {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")

    setTimeout(function(){
        activeButton.classList.remove("pressed"); //Removing the pressed Class from the Button 
        //After 100 milli seconds
    }, 100);
}