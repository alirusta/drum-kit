//drumBtns selektiert die drum classes aus der index.html:
let drumBtns = document.querySelectorAll(".drum").length;

//loop um durch die drum classes aus der index.html zu iterieren.
for (let i = 0; i < drumBtns; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let btnInnerHTML = this.innerHTML;
        makeSound(btnInnerHTML);
        buttonAnimation(btnInnerHTML);
    });
};

// switch case zum verlinken der sounds an die jeweiligen drums.
function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("sounds/why-are-you-gay.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/explosion.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("sounds/mccree-its-high-noon.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("sounds/we-do-a-little-trolling.mp3");
            crash.play();
            break;

        case "l":
            let kickbass = new Audio("sounds/toms-screams.mp3");
            kickbass.play();
            break;

        default:
            console.log("key")
    }
};

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function btnAnimation(currentKey) {
    // . um alle classes auszuwählen
    // wenn a gedrückt wird a wiedergegeben, wenn w dann w etc. alle buttons
    let activeBtn = document.querySelectorAll("." + currentKey);
    // .pressed class aus styles.css übergeben:
    activeBtn.classList.add("pressed");
    // damit es irgendwann endet und nicht dauerhaft triggert:
    // hier mit remove endet activeBtn nach 100ms.
    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    }, 100);
};