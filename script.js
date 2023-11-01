var controls = document.querySelector(".controls");
var matrixData;

function createMatrix(height, width) {
    var matrix=[];
    var result = document.createElement("div");
    for (var i = 0; i < height; i++) {
        matrix.push([]);
        for (var o = 0; o < width; o++) {
            matrix[i].push(`${i}-${o}`);
            var column = document.createElement("div");
            column.classList = `spot, ${i}-${o}`;   //example: "spot, 5-2"
            column.textContent=`${i}-${o}`;
            result.appendChild(column);
        }
    }
    return [result, matrix];
}


// function rotate90(){

// }

// function rotate90ccw(){

// }
function updateHTML(data){

}
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
        matrixHTML.classList="matrixContainer"
        matrixData=matrix[1];
        matrixData.style.gridTemplateColumns ="50px".repeat(matrixHeight);
        document.body.appendChild(matrixHTML);
        alert(`Created ${matrixWidth} by ${matrixHeight} matrix`);
        document.querySelector(".start").remove();

    });

}

main();
alert("script finished");