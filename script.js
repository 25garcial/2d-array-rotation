alert("script ran");
var controls = document.querySelector(".controls");
var matrix = document.querySelector(".matrix");


function createMatrix(height, width) {
    var result = "";
    for (var i = 0; i < height; i++) {
        var row = document.createElement("div");
        for (var o = 0; o < width; o++) {
            var column = document.createElement("div");
            column.classList = `column, ${i}-${o}`;   //example: "column, 5-2"
            row.appendChild(column);
        }
        row.classList = "row";
        result += row.toString();
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
        alert(document.querySelector(".height").textContent);
        var matrixHeight = Number(document.querySelector(".height").value);
        var matrixWidth = Number(document.querySelector(".width").value);

        matrix.innerHTML = createMatrix(matrixHeight, matrixWidth);
        alert(`Created ${matrixWidth} by ${matrixHeight} matrix`);
        document.querySelector(".start").setAttribute("visibility", "hidden");

    });
}

main();
alert("script finished");