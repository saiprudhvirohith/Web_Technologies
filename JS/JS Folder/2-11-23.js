// var x=setInterval(task,1000);
// function task(){
//     const d=new Date();
//     console.log(d);
//     document.getElementById("para").innerHTML=d.toLocaleTimeString()
// }

//!promise
let p=new Promise(function(success,error){
    let data=true
    if (data){
        success("promise is done")
    }
    else
    error("promise not done")
})
console.log(p);