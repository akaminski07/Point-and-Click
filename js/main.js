//Game window reference
const gameWindow = document.getElementById("gameWindow");

//Game state
let gameState = {
    "door2locked": true,
}
localStorage.removeItem("gameState");
//Handle browser storage
if (typeof (Storage) !== "undefined") {
    if (localStorage.gameState) {
        gameState = JSON.parse(localStorage.gameState)
    } else {
        localStorage.setItem("gameState", JSON.stringify(gameState))
    }
} else {
    alert('Web storage not supported')
}

if (localStorage.keyPickedUp) {
    document.getElementById("key1").remove();
}

//Main Character
const mainCharacter = document.getElementById("mainCharacter");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
const counterSpeech = document.getElementById("counterSpeech");
const offsetCharacter = 16;

const counterAvatar = document.getElementById("counterAvatar");

const sec = 1000;
//Inventory
const inventoryBox = document.getElementById("inventoryBox");
const inventoryList = document.getElementById("inventoryList");

const door1 = document.getElementById("door1");
const sign = document.getElementById("sign");

updateInventory(gameState.inventory, inventoryList);

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    console.log(e.target.id);
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    switch (e.target.id) {


        case "door1":
            showMessage(mainCharacterSpeech, "Wow, cool statue...");
            setTimeout(showMessage, 4 * sec, counterSpeech, "I can talk you know... dummy.");
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
                    document.getElementById("inv-key").remove();
                    console.log('Door unlocked!')
                } else {
                    alert("Door is locked!");
                }
            } else {
                console.log('enter building');
            }


            break;

        case "sign":
            setTimeout(showMessage, 0 * sec, mainCharacterSpeech, "I can't read what this sign says.");
            setTimeout(showMessage, 4 * sec, counterSpeech, "I can talk you know... dummy.");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, "Oh sorry, I didn't know signs can talk now...");
            setTimeout(showMessage, 12 * sec, counterSpeech, "Search the left house first, then you may consider searching the one on the right");
            break;
        default:
            door1.style.opacity = 1;
            sign.style.opacity = 1;
            break;


        case "statue":
            showMessage(mainCharacter, "Wow, cool statue...");
            setTimeout(showMessage, 2 * sec, counterSpeech, "I can talk you know... dummy.")
    }

}

updateInventory(gameState.inventory, inventoryList);

function updateInventory(Inventory, inventoryList) {

}

/**
    * It will show dialog and trigger sound.
    * @param {getElementById} targetBubble 
    * @param {string} message
    * @param {getElementById} targetSound 
    */

function showMessage(targetBubble, message) {
    targetBubble.style.opacity = 1;
    targetBubble.innerText = message;
    setTimeout(hideMessage, 4 * sec, targetBubble);
}

setTimeout(showMessage, 1 * sec, "mainCharacterSpeech");
setTimeout(showMessage, 2 * sec, "counterSpeech");

function hideMessage(targetBubble) {
    targetBubble.innerText = "...";
    targetBubble.style.opacity = 0;
};

/** 
* store gameState into localStorage.
* @param {Object} gameState
*/

function saveToBrowser(gameState) {
    localStorage.gameState = JSON.stringify(gameState);
};

