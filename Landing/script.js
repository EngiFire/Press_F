// alert('Hello World!')
// confirm('Hello World')
// prompt('Hello World!')

// let numder = 10;
// let string = '10';
// let object = {
//     age: '15',
//     name'oleg'
// }

// let a = 10;
// let b = 10;
// alert(a+b)

// function Test (name,age) {
//     alert{'Добро пожаловать на сайт, ${name}, у нас есть для ваших, $(age), лет 55 предложений.'}
// }
// Test() 
// ДИИИИИИчь 

// age = prompt("Ваш возраст")
// if(age > 18){
//     alert('Добро пожаловать')
// } else{
//     alert('Вы молоды...')
// }

// let arr = [10,11,12,13,14,15]
// arr.map(
//     (item)=>{
//         alert(item)
//     }
// )

// let tile = document.getElementsByClassName('van-bg-text')
// console.log(title)
// title.innerHTML = "HELLO FROM JS"

let title = document.querySelector(".van-bg-text");

title.innerHTML = "VANLIFE - ЭТО СВОБОДА!";

let burger = document.querySelector(".burger-menu") 

let button = document.querySelector(".nav-open");

button.addEventListener("click", () => {
    burger.classList.toggle('opened')
});