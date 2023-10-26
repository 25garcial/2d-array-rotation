var controls=document.querySelector(".controls");
var matrix=document.querySelector(".matrix");

function randomNum(maxInt){
    return Math.floor(Math.random()*maxInt);
}

function createMatrix(height, width){
    var result="";
    for (var i=0;i<height; i++){
        var row=document.createElement("div");
        for (var o=0;o<width;o++){
            var column=document.createElement("div");
            column.classList=`column, ${i}-${o}`;   //example: "column, 5-2"
            row.appendChild(column);
        }
        row.classList="row";
        result+=row.toString();
    }
    return result;
}



var rotate90Button=document.querySelector("rotate90cc");
rotate90Button.textContent="rotate clockwise";
rotate90Button.addEventListener("click");

var rotate90ButtonCCW=document.querySelector("rotate90ccw");
rotate90ButtonCCW.textContent="rotate counter clockwise";
rotate90ButtonCCW.addEventListener("click");

var createMatrixButton=document.querySelector(".submit");
createMatrixButton.addEventListener("click", ()=>{
    var matrixHeight=Number(document.querySelector(".height").textContent);
    var matrixWidth=Number(document.querySelector(".width").textContent);

    document.querySelector(".start").setAttribute("display", "hidden");
    matrix.innerHTML=createMatrix(matrixHeight,matrixWidth);
})

controls.appendChild(rotate90Button);
controls.appendChild(rotate90ButtonCCW);
