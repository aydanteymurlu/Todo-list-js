
let input = document.querySelector('.input')
let button = document.querySelector('.button')
let delt = document.querySelector('.fa-solid fa-trash-can')
let ul = document.querySelector('.list')

let arr = []
input.addEventListener('keypress',function(event){
    if(event.key==='Enter'){
    event.preventDefault();
let a = input.value
ul.innerHTML=''
arr.push(a)
for (let i = 0; i < arr.length; i++) {    
    ul.innerHTML += `<li class ="lii">${arr[i]}<button class="delete">Delete</button></li>`
}
}
console.log(arr);
})



// delt.addEventListener('click',function delt(event) {
//     if (event.target.textContent === "Delete") {
//         event.target.parentNode.remove();
//         console.log(event.target);
//     }
// })

// ul.addEventListener("click", delt);
