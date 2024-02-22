//Game window reference
const gameWindow = document.getElementById("gameWindow");

//Game state
gameState = {
    "door2locked": true,

}

//Main Character
const mainCharacter = document.getElementById("mainCharacter");
const offsetCharacter = 16;

sec = 1000;
//Inventory
const inventoryBox = document.getElementById("inventoryBox");
const inventoryList = document.getElementById("inventoryList");

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
            door1.style.opacity = 0.5;
            sign.style.opacity = 1;
            if (document.getElementById("key1") !== null) {
                console.log('Found key!');
                document.getElementById("key1").remove();
                const keyElement = document.createElement("li");
                keyElement.id = "inv-key";
                keyElement.innerText = "Key";
                inventoryList.appendChild(keyElement);
            }


            break;
        case "door2":
            if (gameState.door2locked == true) {
                if (document.getElementById("inv-key") !== null) {
                    gameState.door2locked = false;
                    console.log('Door unlocked!')
                } else {
                    alert("Door is locked!");
                }
            } else {
                console.log('enter building');
            }


            break;

        case "sign":
            sign.style.opacity = 0.5;
            door1.style.opacity = 1;
            break;
        default:
            door1.style.opacity = 1;
            sign.style.opacity = 1;
            break;


        case "statue":
            showMessage(mainCharacter, "Wow, cool statue...");
            setTimeout(showMessage, 4 * sec, counterSpeech, "I can talk you know... dummy.")
    }

}

updateInventory(gameState.inventory, inventoryList);

function updateInventory(Inventory, inventoryList) {

}

function showMessage(targetBalloon, message) {
    document.getElementById(targetBalloon).style.opacity = "1";
    targetBalloon.innerText = message;
    setTimeout(hideMessage, 2 * sec, targetBalloon);
}
setTimeout(showMessage, 1 * sec, "mainCharacterSpeech");
setTimeout(showMessage, 2 * sec, "counterSpeech");




function hideMessage(targetballoon) {
    document.getElementById(targetBalloon).style.opacity = "0";
};