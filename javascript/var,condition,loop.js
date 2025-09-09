let x = 5;
let y = 5;
let z = x + y;
console.log(z);

// -----------------------------

const a = 5;
const b = 7;
const c = a + b;
console.log(c);

const price1 = 1000;
const price2 = 2000;
let total = price1 + price2;
console.log(total);

let hour = 19;
if (hour < 10) {
  let tell = "good morning😊";
  console.log(tell);
} else if (hour < 20) {
  let tell = "good day🤩";
  console.log(tell);
} else {
  let tell = "good evening😇";
  console.log(tell);
}

let text;
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is sunday";
    break;
  case 2:
    text = "Today is Tuesday";
    break;
  default:
    text = "Looking forward to the weekend";
}
console.log(text);

// let txt = ""
// for (i= 1; i < 5; i++){
//   txt += "belajar web developer 30 hari" + i, "<br/>";
//   console.log(txt)
// }

// let txt = "";
// let i = 9;
// while (i < 10){
//   txt += "hari yang baik😇";
//   i++;
//   console.log(txt)
// }

let txt = "";
let i = 0;
do {
  txt += "hari yang buruk";
  i++
  console.log(txt)
} while(i < 10)