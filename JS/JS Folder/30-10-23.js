//!appendChild:-
// const x=document.createElement("p");
// console.log(x);

// const x1=document.createElement("li");
// console.log(x1);
// const x2=document.createTextNode("Water")
// console.log(x2);
// console.log(x1.appendChild(x2));
// document.getElementById("list").appendChild(x1)

//!removeChild():-
// const x=document.getElementById("list")
// console.log(x);
// //x.removeChild(x.firstElementChild)
// if(x.hasChildNodes()){
//     x.removeChild(x.children[1])
// }

//!replaceChild:- replace the html element.
// syntax:- rpelaceChild(new,old)
// const x1=document.getElementById('list').children[0]
// const x2=document.createTextNode("water")
// x1.replaceChild(x2,x1.childNodes[0])

//!Dom add event
//!addEventListener(event,function):-
// const x=document.getElementById("btn");
// console.log(x);
// x.addEventListener("click",function(){
//     console.log("Good Morning")
// })

//!onbdclick:-
// function task(){
// const x=document.getElementById("btn");
// console.log(x);
// x.addEventListener("click",function(){
//     //console.log("Hello World")
//     alert("Hello World")
// })
// }

//!onleypress,onkeydown,onkeyup:-
// function task(){
//     alert("press the input field")
// }

//!onMouseover:-
function task(){
    const x1=document.getElementById("demo")
    console.log(x1);
    x1.style.color="red"
}

