const playBoard = document.querySelector(".play-board")
const scoreElement = document.querySelector(".score");
const hightScor = document.querySelector(".high-score");

let gameOver = false;
let foodx, foody;
let snakex = 5, snakey = 10;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let setIntervalId;
let Score = 0;

let hightScore = localStorage.getItem("high-score") || 0;
hightScor.innerHTML = `Highest Score: ${hightScore}`


const changFoodPosition = () => {
    foodx = Math.floor(Math.random() * 30) + 1;
    foody = Math.floor(Math.random() * 30) + 1;
}

const handleGameOver = () => {
    clearInterval(setIntervalId);
    alert("Game Over!!");
    location.reload();
}

const changeDirection = (e) => {
    //console.log(e);
    if (e.key === "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }


}

const initGame = () => {

    if (gameOver) return handleGameOver();

    let htmlMarkup = `<div class="food" style="grid-area: ${foody} /  ${foodx}"> </div>`;

    if (snakex === foodx && snakey === foody) {
        changFoodPosition();
        snakeBody.push([foodx, foody]);
        Score++;

        hightScore = Score >= hightScore ? Score : hightScore;
        localStorage.setItem("high-score", hightScore);
        scoreElement.innerHTML = `Score: ${Score}`

        hightScor.innerHTML = `Highest Score: ${hightScore}`
        // console.log(Score);
    }
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    snakeBody[0] = [snakex, snakey];

    snakex += velocityX;
    snakey += velocityY;

    if (snakex <= 0 || snakex > 30 || snakey <= 0 || snakey > 30) {
        // console.log("game over ");
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} /  ${snakeBody[i][0]}"> </div>`;
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {

            gameOver = true;
        }
    }

    playBoard.innerHTML = htmlMarkup;

}
changFoodPosition();
//initGame();
setIntervalId = setInterval(initGame, 125)
document.addEventListener("keydown", changeDirection);