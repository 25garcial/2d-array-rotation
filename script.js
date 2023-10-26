var controls=document.querySelector(".controls");
var matrix=document.querySelector(".matrix");

function randomNum(maxInt){
    return Math.floor(Math.random()*maxInt);
}

function createMatrix(width, height){

}



var rotate90Button=document.createElement("button");
rotate90Button.textContent="rotate clockwise";
rotate90Button.addEventListener("click", )

var rotate90ButtonCCW=document.createElement("button");
rotate90ButtonCCW.textContent="rotate counter clockwise";
rotate90ButtonCCW.addEventListener("click", )

var createMatrixButton=document.querySelector(".submit");
createMatrixButton.addEventListener("click", ()=>{
    var matrixHeight=document.querySelector(".height").textContent;
    var matrixWidth=document.querySelector(".width").textContent;

    document.querySelector(".start").setAttribute("display", "hidden");
    matrix.innerHTML=createMatrix(matrixWidth, matrixWidth);
})

controls.appendChild(rotate90Button);
controls.appendChild(rotate90ButtonCCW);
