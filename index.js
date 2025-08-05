
function start() {
    const diceRandomBtn = document.querySelector(".player__dice-button");
    const diceHoldBtn = document.querySelector(".player__hold-button");

    const player1 = document.querySelector(".player--1");
    const player2 = document.querySelector(".player--2");

    const player1TotalDocument = player1.querySelector(".player__score-total");
    const player1CurrentDocument = player1.querySelector(
        ".player__score-current"
    );

    const player2TotalDocument = player2.querySelector(".player__score-total");
    const player2CurrentDocument = player2.querySelector(
        ".player__score-current"
    );

    const dice = document.querySelector("#dice");

    let player1Score = 0;
    let player2Score = 0;
    let player1Total = 0;
    let player2Total = 0;
    let player = "player1";

    diceRandomBtn.addEventListener("click", () => {
        if (player1Total <= 50 || player2Total <= 50) {
            play();
        }
    });

    diceHoldBtn.addEventListener("click", () => {
        if (player === "player1") {
            player = "player2";
            player1Total += player1Score;
            player1TotalDocument.textContent = player1Total;
            player1Score = 0;
            player1CurrentDocument.textContent = player1Score;
        } else if (player === "player2") {
            player = "player1";
            player2Total += player2Score;
            player2TotalDocument.textContent = player2Total;
            player2Score = 0;
            player2CurrentDocument.textContent = player2Score;
        }
        if (player1Total >= 50 || player2Total >= 50) {
            alert(
                `player1 : ${player1Total}, player2 : ${player2Total} / ${
                    player1Total >= 50 ? "player1 승!!" : "player2 승!!"
                }`
            );
            player1Score = 0;
            player2Score = 0;
            player1Total = 0;
            player2Total = 0;
            player = "player1";
            player1TotalDocument.textContent = player1Total;
            player1CurrentDocument.textContent = player1Score;
            player2TotalDocument.textContent = player2Total;
            player2CurrentDocument.textContent = player2Score;
            return;
        }
    });

    function randomDice() {
        return Math.floor(Math.random() * 6 + 1);
    }

    function play() {
        let num = randomDice();
        dice.textContent = num;

        if (player === "player1") {
            if (num === 1 || num === 2) {
                player1Score = 0;
                player1CurrentDocument.textContent = player1Score;
                player = "player2";
                return;
            } else {
                player1Score += num;
            }
            player1CurrentDocument.textContent = player1Score;
        }
        if (player === "player2") {
            if (num === 1 || num === 2) {
                player2Score = 0;
                player2CurrentDocument.textContent = player2Score;
                player = "player1";
                return;
            } else {
                player2Score += num;
            }
            player2CurrentDocument.textContent = player2Score;
        }
    }

    console.log(player2Score);
}

start();
