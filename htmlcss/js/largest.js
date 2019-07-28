function checkLargest(){
    var n1 = parseInt(document.getElementById("num1").value);
    var n2 = parseInt(document.getElementById("num2").value);
    if (n2 > n1){
        document.getElementById("display").innerHTML = n2 + " is largest ";
    }
    else if(n2 < n1){
        document.getElementById("display").innerHTML =  n1 + " is largest ";
    }
    else{
        document.getElementById("display").innerHTML =  "Equal" ;
    }
}