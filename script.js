function randomNum(maxInt){
    return Math.floor(Math.random()*maxInt);
}
class textbox{
    inputs = window.document.querySelector(".inputs");

constructor(name){
    
    var textbox=document.createElement("input");
    textbox.placeholder=name;
    textbox.id=toString(randomNum(1000));
    var submitButton=new button(textbox.id);


    inputs.appendChild(textbox);
    this.inputs.appendChild(submitButton);
    return textbox;
}

}




var input = new textbox();
submitButton = document.createElement("button");
submitButton.addEventListener("click", );
