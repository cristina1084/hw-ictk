$(document).ready(function(){
    $("#num1").change(function(){
            var palpromise = new Promise((resolve,reject)=>{
            var num1 = $("#num1").val();
            var temp = num1;
            var num2=0,rev;
            while(temp>0){
                rev = temp%10;
                num2=(num2*10)+rev;
                temp=Math.trunc(temp/10);
               // console.log(rev,num2,temp);
            }
            //console.log(num2);
            if(num1 == num2) resolve('Number is Palindrome');
            else reject('Number is not Palindrome');
        })
        palpromise.then((msg1)=>{
            $("#result").text(msg1);
        })
        .catch((msg2)=>{
            $("#result").text(msg2);
        })
    })
})