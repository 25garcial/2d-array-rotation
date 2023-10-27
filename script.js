alert("script ran");
var controls = document.querySelector(".controls");
var matrixContainer = document.querySelector(".matrixContainer");


function createMatrix(height, width) {
    var result = document.createElement("div");
    for (var i = 0; i < height; i++) {
        var row = document.createElement("div");
        for (var o = 0; o < width; o++) {
            var column = document.createElement("div");
            column.classList = `spot, ${i}-${o}`;   //example: "spot, 5-2"
            column.textContent=`${i}-${o}`;
            row.appendChild(column);
        }
        row.classList = "row";
        result.appendChild(row);
    }
    return result;
}


// function rotate90(){

// }

// function rotate90ccw(){

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
        alert(document.querySelector(".height").value);
        var matrixHeight = parseInt(document.querySelector(".height").value);
        var matrixWidth = parseInt(document.querySelector(".width").value);

        matrixContainer.appendChild((createMatrix(matrixHeight, matrixWidth)));
        alert(`Created ${matrixWidth} by ${matrixHeight} matrix`);
        document.querySelector(".start").remove();

    });
}

main();
alert("script finished");