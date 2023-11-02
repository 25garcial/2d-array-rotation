var controls = document.querySelector(".controls");
var matrixData;

function createMatrix(height, width) {
    var matrix=[];
    var result = document.createElement("div");
    result.classList+="matrixContainer";
    for (var i = 0; i < height; i++) {
        matrix.push([]);
        for (var o = 0; o < width; o++) {
            matrix[i].push([i,o]);
            var spot = document.createElement("div");
            spot.classList.add("spot");
            var text=document.createElement("span");
            spot.classList.add(`${i}-${o}`);   //example: "spot, 5-2"
            spot.style.fontSize=`${0.6*Math.floor(800/height)}`;
            spot.textContent=`${i}-${o}`;
            result.appendChild(spot);
        }
    }

    result.style.gridTemplateColumns=`${Math.floor(800/height)}px `.repeat(height);
    result.style.gridTemplateRows=`${Math.floor(800/width)}px `.repeat(width);

    return [result, matrix];
}


// function rotate90(){

// }

// function rotate90ccw(){

// }
// function updateHTML(data){

// }
function main() {


    var rotate90Button = document.querySelector(".rotate90cc");
    rotate90Button.textContent = "rotate clockwise";
   //rotate90Button.addEventListener("click");

    var rotate90ButtonCCW = document.querySelector(".rotate90ccw");
    rotate90ButtonCCW.textContent = "rotate counter clockwise";
    //rotate90ButtonCCW.addEventListener("click");

    var createMatrixButton = document.querySelector(".submit");
    createMatrixButton.addEventListener("click", () => {
    
        controls.setAttribute("visibility", "visible");
        var matrixHeight = parseInt(document.querySelector(".height").value);
        var matrixWidth = parseInt(document.querySelector(".width").value);

        var matrix=createMatrix(matrixHeight, matrixWidth);
        var matrixHTML=matrix[0];
        matrixHTML.classList="matrixContainer";
        matrixData=matrix[1];
        matrixHTML.style.gridTemplateColumns = "50px, ".repeat(matrixHeight);
        document.body.appendChild(matrixHTML);
        document.querySelector(".start").remove();
       // alert(`Created ${matrixWidth} by ${matrixHeight} matrix`);
    });

}

main();
