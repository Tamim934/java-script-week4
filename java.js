// synchronous code whidk comes frist is synch and it gose like line to line
// anychchornous  come always after synch and asych waits 
// cal bac in function and come in fucntion perimeter 


console.log("1")
setTimeout(()=>{// set timeout you can set a time and wait for the function to appear set a tome and it works until the time apears takes 2 parimeter

    console.log("2")
},2000)

console.log("3")

setInterval(() => { // is let set time out but runs every time you put in it 
    console.log("4")
}, 10000);
console.log("5")
// call back

function foo(callback){
    setTimeout(function(){
        callback("hello world")
    },20000)
}
foo(function(value){
    console.log(value)
})

// promis has 3 stastes
// pending
// fullfilled
//rejected
//fetch is js methodes that  takes andress of form backend
//.then 
// what is jason takes thing form string and make tem an object
// geting data form backend new way
function fetchData(url){
return new Promise((resolve,reject)=>{
    fetch(url)
    .then((Response)=> Response.json())
    .then((data)=> resolve(data))
    .catch((error)=> resolve(error))
})}
fetchData("https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department")
.then((data)=>console.log(data))
// .catch((error)=>console.log(error))// give error not found

// new easy way async makes a funtion aysinchorni
// await wait to get a responce
// async function getData() {
// try {
//     let Response=await fetch('https://63d14a1e3f08e4a8ff94b1a5.mockapi.io/department')
//     let data = await Response.json();
    
//     console.log(data)
//     get(data)
// } catch (error) {
//     console.log((error))
// }
// }
// getData();
// more easy way

// axios


let box=document.querySelector(".box")
function get(data){
    box.innerHTML=""
data.forEach((elem)=>{
    let h1=document.createElement("h1")
    h1.innerHTML=elem.title
    box.appendChild(h1)
    
})
}
get();



 

