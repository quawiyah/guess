const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
let targetColor = "";
let score = 0;

function startGame() {
    score = 0;
    document.getElementById("score").textContent = `Score: ${score}`;
    nextRound();
}

function nextRound() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("colorBox").style.backgroundColor = targetColor;
    generateColorOptions();
    document.getElementById("gameStatus").textContent = "";
}

function generateColorOptions() {
    const optionsContainer = document.querySelector(".colorOptions");
    optionsContainer.innerHTML = "";
    
    colors.forEach(color => {
        const button = document.createElement("button");
        button.classList.add("colorOption");
        button.style.backgroundColor = color;
        button.setAttribute("data-testid", "colorOption");
        button.onclick = () => checkGuess(color);
        optionsContainer.appendChild(button);
    });
}

function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        document.getElementById("gameStatus").textContent = "Correct!";
        score++;
    } else {
        document.getElementById("gameStatus").textContent = "Wrong! Try again.";
    }
    document.getElementById("score").textContent = `Score: ${score}`;
    setTimeout(nextRound, 1000);
}

document.getElementById("newGameButton").addEventListener("click", startGame);


startGame();
        
// function startGame() {
//     targetColor = colors[Math.floor(Math.random() * colors.length)];
//     document.getElementById("colorBox").style.backgroundColor = targetColor;
//     generateColorOptions();
//     document.getElementById("gameStatus").textContent = "";
// }
        
// function generateColorOptions() {
//     const optionsContainer = document.querySelector(".colorOptions");
//     optionsContainer.innerHTML = "";
            
//     colors.forEach(color => {
//         const button = document.createElement("button");
//         button.classList.add("colorOption");
//         button.style.backgroundColor = color;
//         button.setAttribute("data-testid", "colorOption");
//         button.onclick = () => checkGuess(color);
//         optionsContainer.appendChild(button);
//      });
// }
        
// function checkGuess(selectedColor) {
//     if (selectedColor === targetColor) {
//         document.getElementById("gameStatus").textContent = "Correct!";
//         score++;
//     } else {
//         document.getElementById("gameStatus").textContent = "Wrong! Try again.";
//     }
//     document.getElementById("score").textContent = `Score: ${score}`;
// }
        
// document.getElementById("newGameButton").addEventListener("click", startGame);
// startGame();