var matrixHTML;
var matrixData;
function cloneGrid(grid) {
  // Clone the 1st dimension (column)
  const newGrid = [...grid];
  // Clone each row
  newGrid.forEach((row, rowIndex) => newGrid[rowIndex] = [...row]);
  return newGrid;
}

function createMatrix(height, width) {
    var matrix = [];
    var result = document.createElement("div");
    result.classList += "matrixContainer";
    for (var i = 0; i < height; i++) {
        matrix.push([]);
        for (var o = 0; o < width; o++) {
            matrix[i].push([i+1, o+1]);
            var spot = document.createElement("div");
            spot.classList.add("spot");
            spot.classList.add(`${i}-${o}`);   //example: "spot, 5-2"
         //   spot.style.fontSize = `${Math.floor(800 / Math.max(height, width))*8}%`;
            spot.textContent = `${i+1}-${o+1}`;
            result.appendChild(spot);
        }
    }

    result.style.gridTemplateColumns = `${Math.floor(height)*5}px `.repeat(height);
    result.style.gridTemplateRows = `${Math.floor(width)*5}px `.repeat(width);

    return [result, matrix];
}

/* function defineMatrixQuadrants(matrix){
    if (matrix.length%2==0){
        var q1=[0,matrix.length/2-1];
        var q2=[matrix.length-matrix.length/2-1,matrix.length];
    } else{
        var q1=[0,Math.floor(matrix.length/2)];
        var q2=[Math.floor(matrix.length/2), matrix.length];
        var q5 = Math.floor(matrix.length/2);
    }
    console.log(q1, q2);
}
 */
function rotate90(matrix) {

    var result = cloneGrid(matrix);
    for (var i = 0; i < matrix.length; i++) {
        for (var o = 0; o <matrix[i].length; o++) {
           // defineMatrixQuadrants(matrix);
                result[i][matrix.length-1-o] = matrix[o][i];
            
        }
           
    }
    return result;
}

function rotate90ccw(matrix){
    var result = cloneGrid(matrix);
    for (var i = matrix.length; i > 0; i--) {
        for (var o = matrix.length; o > 0; o--) {
            result[matrix[i].length - o][matrix.length - i] = matrix[i][o];
        }
    }
    return result;
}
function updateHTML(data) {
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        for (var o = 0; o < data[i].length; o++) {
            matrixHTML.children[count].textContent = String(data[i][o]);
            count++;
        }
    }
}

function main() {
    var controls = document.createElement("div");
    controls.classList.add("controls");

    var rotate90Button = document.createElement("button");
    rotate90Button.textContent = "rotate clockwise";
    rotate90Button.addEventListener("click", () => {
        matrixData = rotate90(matrixData);
        updateHTML(matrixData);
    });
    controls.appendChild(rotate90Button);

    var rotate90ButtonCCW = document.createElement("button");
    rotate90ButtonCCW.textContent = "rotate counter clockwise";
    rotate90ButtonCCW.addEventListener("click", () => {
        matrixData = rotate90ccw(matrixData);
        updateHTML(matrixData);
    });
    controls.appendChild(rotate90ButtonCCW);

    var createMatrixButton = document.querySelector(".submit");
    createMatrixButton.addEventListener("click", () => {
        controls.style.visibility = "visible";
        var matrixHeight = parseInt(document.querySelector(".height").value);
        var matrixWidth = parseInt(document.querySelector(".width").value);

        var matrix = createMatrix(matrixHeight, matrixWidth);
        matrixHTML = matrix[0];
        matrixHTML.classList = "matrixContainer";
        matrixData = matrix[1];
        document.body.appendChild(controls);
        document.body.appendChild(matrixHTML);
        document.querySelector(".start").remove();
        // alert(`Created ${matrixWidth} by ${matrixHeight} matrix`);

    });
}
main();
