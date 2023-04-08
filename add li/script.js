const btn = document.querySelector("button");
const list = document.querySelector("ul");

let number = 1;
const addListItem = () => {
  const newItem = document.createElement("li");
  list.append(newItem);
  newItem.textContent = number;
  if(number % 3==0){
    newItem.classList.add('big')
  }
  number+=2;
};

btn.addEventListener("click",addListItem)