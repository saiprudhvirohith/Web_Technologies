//!onsubmit:-
// function task(){
//     alert("Good Morning")
//     console.log("hello")
// }

//!contextmenu:-
// const x=document.getElementById("div1");
// console.log(x)
// x.addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
// })

//Event Propagation
// const parent=document.getElementById("parent");
//         const child=document.getElementById("child");
//         console.log(parent)
//         console.log(child)
//         parent.addEventListener("click",function(){
//             alert("parent")
//         },true)
//         child.addEventListener("click",function(){
//             alert("child")
//         })

// let child=document.getElementById("child")
// child.onclick=function(e){
//     console.log("child");
//     e.stopPropagation();
// }

//!JSON

var emp=[{
    ename:"Prudhvi",
    id:143,
    sal:"4.5lpa"
},
{
    ename:"Shivani",
    id:123,
    sal:"4lpa"
},
{
    ename:"venky",
    id:125,
    sal:"5lpa"
}]
console.log(typeof(emp));
console.log(emp);
var res=JSON.stringify(emp);
console.log(res);
console.log(typeof(res));
var normal=JSON.parse(res)
console.log(normal);
console.log(typeof(normal));
