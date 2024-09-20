var screen =document.getElementById("screen");

function btn(value){
    screen.value+=value;
}
function clearscreen(){
    screen.value= "";
}

function findResult(){
     var res=eval(screen.value)
     screen.value=res;
}
