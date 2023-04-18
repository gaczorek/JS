const newRectangle = document.createElement('div');

let size = 10;
let grow = true;

document.body.style.height =`10000px`;


newRectangle.style.position = "fixed";
newRectangle.style.left = 0;
newRectangle.style.top = 0; 
newRectangle.style.width = "100%";
newRectangle.style.height = `${size}px`;
newRectangle.style.backgroundColor ="green";

document.body.append(newRectangle);


const changeHeight = () =>{
if(grow){
    size+=5;
    newRectangle.style.backgroundColor = "green";
}

else{
    size-=5;
    newRectangle.style.backgroundColor = "red";
}

newRectangle.style.height = `${size}px`;

if(size>=window.innerHeight/2){
    grow = !grow
} else if(size <= 0){
    grow = !grow;
}
}

window.addEventListener('scroll', changeHeight)