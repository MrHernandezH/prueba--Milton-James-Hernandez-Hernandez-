"use strict";
let arr = [];
document.querySelector(".button").addEventListener("click", function () {
  let input = document.querySelector(".texto").value;
  let res = 0;
  const op = "-+*/";
  let aux = "";
  for (let x = 0; x < input.length; x++) {
    if (op.indexOf(input[x]) == -1) {
      aux += input[x];
    }
    if (op.indexOf(input[x]) >= 0) {
      arr.push(aux);
      arr.push(input[x]);
      aux = "";
    }
  }
  arr.push(aux);
  console.log(arr);
  while (arr.indexOf("/") != -1) {
    let one = arr.indexOf("/");
    let div = Number(arr[one - 1]) / Number(arr[one + 1]);
    arr.splice(one - 1, 3, div);
  }
  while (arr.indexOf("*") != -1) {
    let two = arr.indexOf("*");
    let mult = Number(arr[two - 1]) * Number(arr[two + 1]);
    arr.splice(two - 1, 3, mult);
  }
  while (arr.length > 2) {
    for (const [x, val] of arr.entries()) {
      if (val === "-") {
        let sub = Number(arr[x - 1]) - Number(arr[x + 1]);
        arr.splice(x - 1, 3, sub);
        break;
      } else if (val === "+") {
        let add = Number(arr[x - 1]) + Number(arr[x + 1]);
        arr.splice(x - 1, 3, add);
        console.log(arr);
      }
    }
  }

  document.querySelector(".res").textContent = arr[0];
  document.querySelector(".button").disabled = true;
  console.log(arr);
});

document.querySelector(".limpiar").addEventListener("click", function () {
  document.querySelector(".texto").value = "";
  arr = [];
  document.querySelector(".res").textContent = "";
  document.querySelector(".button").disabled = false;
});
//4-7+8+9/2*3
