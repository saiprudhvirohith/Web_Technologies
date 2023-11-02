function otp(){
    var x1=Math.random()*(9999-1000)+1000
    console.log(x1);
    var otp=Math.floor(x1)
    console.log(otp);
    var name=document.getElementById("input1").value
    var s=document.getElementById("output").innerHTML="Dear "+name+" your OTP is "+otp
}