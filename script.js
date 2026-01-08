// Typing Speed Test Logic

const quotes = [
    "Practice makes perfect.",
    "JavaScript is fun to learn.",
    "Typing fast improves productivity.",
    "Front end development is creative.",
    "Never stop learning new skills."
];

const quoteElement = document.getElementById("quote");
const inputElement = document.getElementById("text-input");
const startButton = document.getElementById("start-btn");
const timeElement = document.getElementById("time");
const wpmElement = document.getElementById("wpm");

let startTime;
let timerInterval;

// Start the test
startButton.addEventListener("click", startTest);

function startTest() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const bestWpmElement = document.getElementById("best-wpm");
    quoteElement.textContent = randomQuote;

    inputElement.value = "";
    inputElement.disabled = false;
    inputElement.focus();

    timeElement.textContent = 0;
    wpmElement.textContent = 0;

    startTime = new Date();
    timerInterval = setInterval(updateTime, 1000);

    startButton.disabled = true;
    
}

// Load best WPM from localStorage
let bestWPM = localStorage.getItem("bestWPM") || 0;
bestWpmElement.textContent = bestWPM;

// Update timer
function updateTime() {
    const currentTime = Math.floor((new Date() - startTime) / 1000);
    timeElement.textContent = currentTime;
}

// Check typing
inputElement.addEventListener("input", () => {
    if (inputElement.value === quoteElement.textContent) {
        clearInterval(timerInterval);
        inputElement.disabled = true;
        startButton.disabled = false;
        calculateWPM();
    }
});

// Calculate Words Per Minute
function calculateWPM() {
    const totalTime = Math.floor((new Date() - startTime) / 1000) / 60;
    const wordCount = quoteElement.textContent.split(" ").length;
    const wpm = Math.round(wordCount / totalTime);
    wpmElement.textContent = wpm;
}



