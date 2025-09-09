// simplified version with only variables
// const P = 12;
// const L = 12;
// const rumus = P * L
// console.log("luas persegi panjang : ", rumus)

// ----------------------------------------------------------

// Versions with Conditions (if-else)
// const P = 0;
// const L = 12;

// if(P <= 0 && L <= 0){
//   console.log("Panjang dan Lebar harus lebih dari 0")
// } else{
//   const rumus = P * L;
//   console.log("Luas persegi panjang adalah :", rumus);
// }

// ------------------------------------------------------------

// Versions with Loops
const data = [
  {P : 12, L : 13},
  {P : 10, L : 13},
  {P : 20, L : 23}
];
for(let i = 0; i < data.length; i++){
  const {P,L} = data[i];
  const luas = P * L;
  console.log(`Persegi panjang ke-${i + 1} : ${luas}`);
}

// --------------------------------------------------------------

// Interactive Version (use prompt)
//  const P = parseInt(prompt("masukkan nilai panjang : "))
//  const L = parseInt(prompt("masukkan nilai lebar : "))

//  if(P <= 0 && L <= 0){
//   alert("Panjang atau lebar harus lebih dari 0")
//  } else{
//   const rumus = P * L
//   alert("jadi hasil luas persegi panjang adalah :" + rumus)
//  }



