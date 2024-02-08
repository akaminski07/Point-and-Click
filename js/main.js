document.getElementById("title").innerText = "Point and Click Adventure game";

//Game window reference
const gameWindow = document.getElementById("gameWindow");

//Main Character
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;

const door1 = document.getElementById("door1");
const sign = document.getElementById("sign");

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    console.log(e.target.id);
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    switch (e.target.id) {
        case "door1":
            mainCharacter.style.backgroundColor = "#FFFF00";
            door1.style.opacity = 0.5;
            sign.style.opacity = 1;
            break;

        case "sign":
            mainCharacter.style.backgroundColor = "#FFFF00";
            sign.style.opacity = 0.5;
            door1.style.opacity = 1;
            break;

        default:
            mainCharacter.style.backgroundColor = "#26d0ff";
            door1.style.opacity = 1;
            sign.style.opacity = 1;
            break;
    }

}