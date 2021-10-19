let qwerty = document.getElementById("qwerty");
let pharse = document.getElementById("pharse");
let ul = phrase.querySelector("ul");
let missed = 0;
let letters = [];
let matches = [];
let phrases = [
                "change the world by being yourself ",  
                "every moment is a fresh beginning", 
                "never regreat anything that made you smile",
                "simplicity is the ultimate sophistication",
                "whatever you do do it well"
              ];
const btn_reset = document.getElementsByClassName("btn__reset")[0];
const overley = document.getElementById("overlay");



// helper func 


function checkletter(letter) {
    let match = [];
    const phrase = ul.children;
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i].textContent === letter.textContent) {
            phrase[i].className = "letter show";
            letter.className = "show";
            match.push(letter.textContent)
        }
    }
    if (match[0]) {
        matches.push(match[0]);
    } else {

        lifeRemove();
    }

}

function lifeRemove() {
    const lifes = document.querySelectorAll(".tries");
    if (lifes.length) {
        missed += 1
        lifes[lifes.length - 1].remove();
    } 
    if (missed === 5) {
        overley.setAttribute("class", "lose");
        overley.style.display = "flex";
        console.log("game lost");
        missed = 0
    }
}

function getRandomPhraseAsArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function addPhraseToDisplay(phrase) {
    for (let i = 0; i < phrase.length; i++) {
        let li = document.createElement("li");
        if (phrase[i] === " ") {
            li.className = "space";
        } else {
            li.className = "letter";
        }
        li.innerHTML = phrase[i];
        ul.appendChild(li);
    }
}




// manipulation
btn_reset.addEventListener("click", (event) => {
    
    if (event.target === event.currentTarget) {
        overley.style.display = "none";
    }
})



qwerty.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        event.target.className = "chosen";
        event.target.disabled = true;
        checkletter(event.target);
    }

});

// run logic 

addPhraseToDisplay(getRandomPhraseAsArray(phrases));



