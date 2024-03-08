const playBoard = document.querySelector(".play-board")

let foodx, foody;
let snakex = 5, snakey = 10;
let velocityX = 0, velocityY = 0;
let snakeBody = [];

const changFoodPosition = () => {
    foodx = Math.floor(Math.random() * 30) + 1;
    console.log(foodx);
    foody = Math.floor(Math.random() * 30) + 1;
}

const changeDirection = (e) => {
    //console.log(e);
    if (e.key === "ArrowUp") {
        velocityX = 0;
        velocityY = -1;
    } else if (e.key === "ArrowDown") {
        velocityX = 0;
        velocityY = 1;
    } else if (e.key === "ArrowLeft") {
        velocityX = -1;
        velocityY = 0;
    } else if (e.key === "ArrowRight") {
        velocityX = 1;
        velocityY = 0;
    }


}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foody} /  ${foodx}"> </div>`;

    if (snakex === foodx && snakey === foody) {
        changFoodPosition();
        snakeBody.push([foodx, foody]);
        //console.log(snakeBody);
    }
    for(let i = snakeBody.length -1; i>0;i--){
        snakeBody[i] = snakeBody[i-1];
    }
    snakeBody[0] = [snakex, snakey];

    snakex += velocityX;
    snakey += velocityY;

    for (let i = 0; i < snakeBody.length; i++) {
        htmlMarkup += `<div class="head" style="grid-area: ${snakeBody[i][1]} /  ${snakeBody[i][0]}"> </div>`;

    }

    playBoard.innerHTML = htmlMarkup;

}
changFoodPosition();
//initGame();
setInterval(initGame, 125)
document.addEventListener("keydown", changeDirection);