function loginData(){
    var user = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;
    document.getElementById("td1").innerHTML = user;
    document.getElementById("td2").innerHTML = pwd;
}

function registerData(){
    var name = document.getElementById("name").value;
    var district = document.getElementById("district").value;
    var gender;
    if (document.getElementById("male").checked){
        gender = document.getElementById("male").value;
    }
    else if (document.getElementById("female").checked){
        gender = document.getElementById("female").value;
    }
    var user_name = document.getElementById("username").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2")  .value;
    document.getElementById("td1").innerHTML = name;
    document.getElementById("td2").innerHTML = district;
    document.getElementById("td3").innerHTML = gender;
    document.getElementById("td4").innerHTML = user_name;
    document.getElementById("td5").innerHTML = pass1;
    document.getElementById("td6").innerHTML = pass2;
}