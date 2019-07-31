$(document).ready(function(){
    function digitsum(x,callback){
        var temp = x;
        var sum=0;
        while(temp>0){
            sum += temp%10;
            temp = Math.trunc(temp/10);
        }
        callback("Sum of digits of "+x+" = "+sum);
    }

    $("#num1").change(function(){
        var x = $("#num1").val();
        console.log(x);
        digitsum(x,(res)=>{
            $("#result").text(res);
        })
    })
})
