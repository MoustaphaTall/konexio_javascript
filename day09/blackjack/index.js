var scorePlayer = 0;
var scoreBank = Math.floor(Math.random() * (21 - 16 + 1)) + 16;

var prompt = require('prompt');
prompt.start();

var schema = {
    properties: {
        card: {
            // pattern: /(?=.*y)[yes]{1,}|(?=.*n)[no]{1,}/gi,
            pattern: /^[yes]+|[no]+$/,
            message: "Yes or no? Pick a choice!",
            description: "Card ? (type 'y' or 'yes' for a new card)",
            required: true
        }
    }
};


function onErr(err) {
    console.log(err);
    return 1;
}

function calcScore() {
    scorePlayer = scorePlayer + Math.floor(Math.random() * (11 - 1 + 1)) + 1;
    console.log(`You have ${scorePlayer}!`);
    if (scorePlayer === 21) {
        console.log("Congratulations! That's a Blackjack!!");
        return;
    } else if (scorePlayer > 21) {
        console.log('You lose… Try again!');
        return;
    }
    getPrompt();
}

function getWinOrLose() {
    console.log(`The bank has ${scoreBank}`);
    console.log(`You have ${scorePlayer}!`);
    if (scorePlayer > scoreBank) {
        console.log('You win!');
        return;
    } else if (scorePlayer < scoreBank || scorePlayer === scoreBank) {
        console.log('You lose… Try again!');
        return;
    }
}

function getPrompt() {
    prompt.get(schema, function (err, result) {
        if (err) { return onErr(err) };
        if (result.card.toLowerCase().includes('y')) {
            calcScore();
        } else if (result.card.toLowerCase().includes('n')) {
            getWinOrLose();
        }
    });
}

getPrompt();