const btnSizeUp = document.querySelector('.sizeUp'); 
const btnSizeDown = document.querySelector('.sizeDown');
const btnColor = document.querySelector('.color');
const text = document.querySelector('p');

let fontSize = 36;

const FontSizeUp = () => {
    if(fontSize<60){
        fontSize+=2
    }
    text.style.fontSize = `${fontSize}px`
}


const FontSizeDown = () => {
    if(fontSize<=8) return
    fontSize-=2
    text.style.fontSize = `${fontSize}px`
}

const changeColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    
    text.style.color = 
    `rgb(${r}, ${g}, ${b})`
}

btnSizeUp.addEventListener("click",FontSizeUp); 
btnSizeDown.addEventListener("click", FontSizeDown);
btnColor.addEventListener("click", changeColor); 