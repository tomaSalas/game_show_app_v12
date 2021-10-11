let qwerty = document.getElementById("qwerty");
let pharse = document.getElementById("pharse");
let ul = phrase.querySelector("ul");
let missed = 0;
let phrases = [
                "hello stranger",  
                "bye stranger", 
                "wheel stranger",
                "hammer stranger",
                "car stranger"
              ];
const btn_reset = document.getElementsByClassName("btn__reset")[0];
const overley = document.getElementById("overlay");



// helper func 


function getRandomPhraseAsArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function addPhraseToDisplay(phrase) {
    newUl = document.createElement("ul"); 
    for (let i = 0; i < phrase.length; i++) {
        console.log(phrase[i]);
        let li = document.createElement("li");
        if (phrase[i] === " ") {
            li.className = "space"
        } else {
            li.className = "letter"
        }
        li.innerHTML = phrase[i];
        ul.appendChild(li);
    }
}

addPhraseToDisplay(getRandomPhraseAsArray(phrases));


// manipulation
btn_reset.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
        console.log("asdf");
        overley.style.display = "none";
    }
})





