const square = document.createElement('div');
document.body.append(square);
square.classList.add('square');

let squareSize = 10;
square.style.width = `${squareSize}px`;
square.style.height = `${squareSize}px`;

let grow = true;

const scroll = () => {
    if(grow){
    squareSize+=5;
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
} else {
    squareSize-=5;
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
}
if(squareSize>= window.innerWidth/2){
    grow = !grow
} else if( squareSize <=0){
    grow = true
}
}

window.addEventListener("scroll", scroll)