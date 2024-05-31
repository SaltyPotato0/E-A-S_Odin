let divNum = 16;
const par = document.querySelector("p");
const container = document.querySelector(".container");

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
    
  }

  random(0,255 );
function randomColor() {
    return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
  }

function createColumn(divNum){
    

    const column = document.createElement("div");
    container.appendChild(column);
    column.classList.add("column");
    const hw = 960/divNum +"px"
   
    for (let i = 0; i < divNum; i++){
        let op = 1;
        const div = document.createElement("div");
        column.appendChild(div);
        div.classList.add("tile"); 
        div.style.setProperty("height", hw);
        div.style.setProperty("width", hw);
        let colorChanged = false;
        div.addEventListener("mouseover", ()=> {
            if (op > 0){
                op-=0.1;
                div.style.setProperty("opacity", op);
            }
        
            if(colorChanged == false){
            const color = randomColor();
            div.style.setProperty("background", color)
            }
            /*
            colorChanged = true; */
    });
    
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
    const floorPick = Math.floor(pick)
   if (isNaN(Number(pick))){
   
    par.textContent = "Only whole number will work";
   }

   else if ((Number(pick)%1)){
        par.textContent = "Only whole number will work"
   }

   else if (Number(pick) > 100 || Number(pick) < 0){
    par.textContent = "No more then 100, no less then 1";
   }
   else { 
        createRows(Number(pick)); 
        par.textContent = `Current grid is: ${pick} x ${pick}`;
         
   }
}