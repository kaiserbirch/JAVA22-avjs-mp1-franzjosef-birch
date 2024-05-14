import {HighScore} from "./highScore";


const highScore = new HighScore();
export default async function () {
    const RPS = ["Rock", "Paper", "Scissor"];
//winning combinations
    const win = ["RockScissor", "PaperRock", "ScissorPaper"];

    const playerButtons = document.querySelectorAll("#playerButtons > button");
    const playerMoveView = document.querySelector("#playerMoveView > h1");
    const computerMoveView = document.querySelector("#computerMoveView> h1");
    const playerScoreBoard = document.getElementById("playerScore");
    const nameButton = document.getElementById("nameButton");
    const highScoreView = document.getElementById("highScore");

    await highScore.initHighScore();
    let playerScore = 0;
    let playerMove, computerMove;
    let playerName

    highScoreView.innerHTML = highScore.highScore.map(e => `<li>${e.name} - ${e.score}</li>`).join('');



    nameButton.addEventListener("click", event => {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let h1 = document.createElement("h1");
        h1.innerText = name;
        playerName = name;
        let form = document.getElementById("nameForm");
        form.replaceWith(h1);
        playerButtons.forEach(e => e.removeAttribute("disabled"))
    });

    playerButtons.forEach((node) => node.addEventListener("click", play));

    async function play(event) {
        playerMove = event.target.value;
        computerMove = getRandomRPS();
        console.log(computerMove)
        await evalPlay(playerMove, computerMove);
        updateWindow();
    }

    function getRandomRPS() {
        return RPS[Math.floor(Math.random() * RPS.length)];
    }

    function updateWindow() {
        playerMoveView.innerText = playerMove;
        computerMoveView.innerText = computerMove;
        playerScoreBoard.innerText = playerScore;
    }

    async function evalPlay(playerMove, computerMove) {
        if (playerMove === computerMove) {
            console.log("equal moves")
            return;
        }
        if (win.includes(playerMove + computerMove)) {
            console.log("player score increase")
            playerScore++;
        } else {
            console.log("game over")
            await highScore.addHighScoreEntry({name: playerName, score: playerScore});
            highScoreView.innerHTML = highScore.highScore.map(e => `<li>${e.name} - ${e.score}</li>`).join('');
            alert("game over")
            reset()
        }

    }


    function reset() {
        playerScore = 0;
        playerScoreBoard.innerText = playerScore;
        playerMoveView.innerText = "";
        computerMoveView.innerText = "";
    }
}