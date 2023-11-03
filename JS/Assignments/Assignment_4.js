const form=document.getElementById("login");
//console.log(form);
function verify(){
    form.addEventListener("submit",function(e){
        let x=document.getElementById("name").value
        let y=document.getElementById("pwd").value
        if(x==="abc@gmail.com" && y==="abc@123"){
            console.log("success");
            e.preventDefault();
        }
        else{
            console.log("fail");
            e.preventDefault();
        }
    })
}