// Shuffling function to randomize the order of words
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const words = [
    {
        word: "abduct",
        synonyms: ["kidnap", "capture", "seize", "snatch"]
    },
    {
        word: "absurd",
        synonyms: ["ludicrous", "nonsensical", "preposterous"]
    },
    {
        word: "abundance",
        synonyms: ["wealth", "mass", "profusion", "bounty"]
    },
    {
        word: "accompany",
        synonyms: ["usher", "chaperone", "escort"]
    },
    // Add more words here
];

// Randomize the order of words
const shuffledWords = shuffle(words);

let currentWordIndex = 0;

function showWord() {
    const word = shuffledWords[currentWordIndex].word;
    document.getElementById('word').innerText = word;
}

function checkGuess() {
    const guess = document.getElementById('guessInput').value.trim().toLowerCase();
    const synonyms = words[currentWordIndex].synonyms;

    if (synonyms.includes(guess)) {
        document.getElementById('result').innerText = "Correct! Well done!";
        document.getElementById('nextWord').style.display = 'block';
        document.getElementById('submitGuess').disabled = true;
    } else {
        document.getElementById('result').innerText = "Incorrect! Try again.";
    }
}

function nextWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    document.getElementById('result').innerText = '';
    document.getElementById('nextWord').style.display = 'none';
    document.getElementById('submitGuess').disabled = false;
    document.getElementById('guessInput').value = '';
    showWord();
}

document.getElementById('submitGuess').addEventListener('click', checkGuess);
document.getElementById('nextWord').addEventListener('click', nextWord);

// Start the game with the first word
showWord();
