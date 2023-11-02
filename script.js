var matrixHTML;
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
            alert(`${Math.floor(0.45*Math.floor(800/height))}px`);
            spot.style.fontSize=`${0.6*Math.floor(800/height)}px`;
            spot.textContent=`${i}-${o}`;
            result.appendChild(spot);
        }
    }

    result.style.gridTemplateColumns=`${Math.floor(800/height)}px `.repeat(height);
    result.style.gridTemplateRows=`${Math.floor(800/width)}px `.repeat(width);

    return [result, matrix];
}


 function rotate90(matrix){
var result=JSON.decode(JSON.encode(matrix));

    for (var i=0; i<matrix.length; i++){
        for (var o=0; o<matrix[i].length; 0++){
            result[matrix[i].length-o][matrix.length-i]=matrix[i][o];
        }
    }
    return result;
 }

 function rotate90ccw(){
    var result=JSON.decode(JSON.encode(matrix));

    for (var i=matrix.length; i>0; i--){
        for (var o=matrix.length; o>0; o--){
            result[matrix[i].length-o][matrix.length-i]=matrix[i][o];
        }
    }
    return result;
}
//  function updateHTML(data){
//     for (){

//     }
//  }

function main() {
    var controls = document.createElement("div");
    controls.classList.add("controls");

    var rotate90Button = document.createElement("button");
    controls.appendChild(rotate90Button);
    rotate90Button.textContent = "rotate clockwise";
   rotate90Button.addEventListener("click", () => {
    matrixData=rotate90(matrixData);
    updateHTML(matrixData);
   });

    var rotate90ButtonCCW =  document.createElement("button");
    rotate90ButtonCCW.textContent = "rotate counter clockwise";
    controls.appendChild(rotate90ButtonCCW);
    rotate90ButtonCCW.addEventListener("click", () => {
    matrixData=rotate90ccw(matrixData);
    updateHTML(matrixData);
   });

    var createMatrixButton = document.querySelector(".submit");
    createMatrixButton.addEventListener("click", () => {
    
        controls.setAttribute("visibility", "visible");
        var matrixHeight = parseInt(document.querySelector(".height").value);
        var matrixWidth = parseInt(document.querySelector(".width").value);

        var matrix=createMatrix(matrixHeight, matrixWidth);
        matrixHTML=matrix[0];
        matrixHTML.classList="matrixContainer";
        matrixData=matrix[1];
        matrixHTML.style.gridTemplateColumns = "50px, ".repeat(matrixHeight);
        document.body.appendChild(controls);
        document.body.appendChild(matrixHTML);
        document.querySelector(".start").remove();
       // alert(`Created ${matrixWidth} by ${matrixHeight} matrix`);
       
    });

}

main();
