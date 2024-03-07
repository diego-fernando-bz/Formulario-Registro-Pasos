const playBoard = document.querySelector(".play-board")

let foodx, foody;
let snakex = 5, snakey =10;
let velocityX=0, velocityY=0;

const changFoodPosition = () => {
    foodx = Math.floor(Math.random() * 30) + 1;
    console.log(foodx);
    foody = Math.floor(Math.random() * 30) + 1;
}

const changeDirection = (e) => {
    //console.log(e);
    if(e.key ==="ArrowUp"){
        velocityX =0;
        velocityY = -1;
    }else if(e.key ==="ArrowDown"){
        velocityX =0;
        velocityY = 1;
    }else if(e.key ==="ArrowLeft"){
        velocityX =-1;
        velocityY = 0;
    }else if(e.key ==="ArrowRight"){
        velocityX =1;
        velocityY = 0;
    }


}

const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foody} /  ${foodx}"> </div>`;

    if(snakex === foodx && snakey === foody){
        changFoodPosition();

    }

    snakex += velocityX;
    snakey += velocityY;

    htmlMarkup += `<div class="head" style="grid-area: ${snakey} /  ${snakex}"> </div>`;
    playBoard.innerHTML = htmlMarkup;

}
changFoodPosition();
//initGame();
setInterval(initGame, 125)
document.addEventListener("keydown",  changeDirection);