let divNum = 16;

const container = document.querySelector(".container");


function createColumn(divNum){

    const column = document.createElement("div");
    container.appendChild(column);
    column.classList.add("column")
    const col = document.querySelector(".column");
    for (let i = 0; i < divNum; i++){
       
    const div = document.createElement("div");
    column.appendChild(div);
    div.classList.add("tile"); 
    }    
   
    return col;
}

function createRows(divNum){

    let i = 0; 
    while (i < divNum){
        
        createColumn(divNum);
        i++ 
    }
 
}

createRows(16
);

