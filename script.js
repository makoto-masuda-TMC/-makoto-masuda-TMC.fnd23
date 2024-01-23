'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }

// test()

console.log("test")

// function alertHello() {
//     window.alert("Hello");
// }

// console.log(document.getElementById("button1"))
// const button1 = document.getElementById("button1");
// button1.addEventListener("click", alertHello)

function omikuji0(){
    const list = ["0","1","2"];
    let random = Math.floor(Math.random() * 3);
    //random関数を利用して3までのランダムの数を作成
　　//floor関数で小数を切り捨てて整数にする
    document.getElementById("result0").innerText = list[random];
}

const button0 = document.getElementById("button0");
button0.addEventListener("click", omikuji0)



function omikuji(){
    const list = ["大吉","中吉","中吉","中吉","小吉","小吉","小吉","小吉","凶","凶","大凶"];
    let random = Math.floor(Math.random() * list.length);
    //random関数を利用して0～リストの数までのランダムの数を作成
　　//floor関数で小数を切り捨てて整数にする
    document.getElementById("result").textContent = list[random];
}

const button1 = document.getElementById("button1");
button1.addEventListener("click", omikuji)

const btn3 = document.getElementById('btn3');
const mask = document.getElementById('mask');
const modal = document.getElementById('modal');

btn3.addEventListener('click', () => {
  mask.classList.remove('hidden');
  modal.classList.remove('hidden');
});

mask.addEventListener('click', () => {
  mask.classList.add('hidden');
  modal.classList.add('hidden');
});

function omikuji2(){
    const list = ["大吉!!!","中吉!!","中吉!!","中吉!!","小吉!","小吉!","小吉!","小吉!","凶","凶","大凶"];
    let random = Math.floor(Math.random() * list.length);
    document.getElementById("result2").textContent = list[random];
}
const button3 = document.getElementById("btn3");
button3.addEventListener("click", omikuji2)