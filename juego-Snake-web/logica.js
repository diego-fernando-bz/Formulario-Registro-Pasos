const playBoard = document.querySelector(".play-board")

let foodx, foody;
let snakex = 5, snakey =10;

const changFoodPosition = () => {
    foodx = Math.floor(Math.random() * 30) + 1;
    console.log(foodx);
    foody = Math.floor(Math.random() * 30) + 1;
}


const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foody} /  ${foodx}"> </div>`;
    htmlMarkup += `<div class="head" style="grid-area: ${snakey} /  ${snakex}"> </div>`;
    playBoard.innerHTML = htmlMarkup;

}
changFoodPosition();
initGame();