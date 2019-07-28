 function displayDetails(){
    var pm = /^[6-9][0-9]{9}$/;
    var nm = /^[\.a-zA-Z ]+$/;
    var cm = /^[\.,a-zA-Z ]+$/;

    if(document.getElementById("name").value.match(nm)){
        var name = document.getElementById("name").value;
        document.getElementById("td1").innerHTML = name;
    }

    if(document.getElementById("clg").value.match(cm)){
        var clg = document.getElementById("clg").value;
        document.getElementById("td4").innerHTML = clg;
    }

    if(document.getElementById("place").value.match(cm)){
        var place = document.getElementById("place").value;
        document.getElementById("td5").innerHTML = place;
    }
    
    if(document.getElementById("mobile").value.match(pm)){
        var mobile = document.getElementById("mobile").value;
        document.getElementById("td6").innerHTML = mobile;
    }

    var rollno = document.getElementById("rollno").value;
    var admino = document.getElementById("admino").value;
    document.getElementById("td2").innerHTML = rollno;
    document.getElementById("td3").innerHTML = admino;
    
}
function resetData(){
    document.getElementById("td1").innerHTML = " ";
    document.getElementById("td2").innerHTML = " ";
    document.getElementById("td3").innerHTML = " ";
    document.getElementById("td4").innerHTML = " ";
    document.getElementById("td5").innerHTML = " ";
    document.getElementById("td6").innerHTML = " ";
}