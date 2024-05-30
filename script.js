let divNum = 16;

const container = document.querySelector(".container");

let randomColor = function () {
    return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
  }

function createColumn(divNum){

    const column = document.createElement("div");
    container.appendChild(column);
    column.classList.add("column");
    const hw = 960/divNum +"px"
    
    for (let i = 0; i < divNum; i++){
    
    const div = document.createElement("div");
    column.appendChild(div);
    div.classList.add("tile"); 
    div.style.setProperty("height", hw);
    div.style.setProperty("width", hw);
    div.addEventListener("mouseover", ()=> {
        div.style.setProperty("background", "red")
    })
    div.addEventListener("mouseout", ()=> {
       setTimeout(()=> {div.style.setProperty("background", "rgb(90, 90, 90);" )}, 500)
    })
    }    
   
    
}

function createRows(divNum){
    container.replaceChildren();
    let i = 0; 
    while (i < divNum){
        
        createColumn(divNum);
        i++ 
    }
    
}

const button = document.querySelector("button");

button.addEventListener("click", pickSize)

createRows(divNum);


function pickSize (){
   const pick = prompt("Pick number of squer per colum but no more then 100");

   if (isNaN(Number(pick))){
   
    console.log("Please pick number up to a 100");
   }

   else if (Number(pick) > 100){
    console.log("U picked more than 100. Please pick number up to a 100");
   }
   else {
        createRows(Number(pick));  
   }
}