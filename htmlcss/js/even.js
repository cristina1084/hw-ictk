function checkNumber(){
    var n = parseInt(document.getElementById("num").value);
    if (n%2==0){
        document.getElementById("display").innerHTML = "Even number";
    }
    else{
        document.getElementById("display").innerHTML = "Odd number";
    }
}