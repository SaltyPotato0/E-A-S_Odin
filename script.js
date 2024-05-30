let divNum = 50;

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

    let i = 0; 
    while (i < divNum){
        
        createColumn(divNum);
        i++ 
    }
    
}

console.log(container);

createRows(divNum);