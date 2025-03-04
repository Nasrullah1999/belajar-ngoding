function buatJus(apel, gula) {
    return `Jus ${apel} apel + ${gula} sendok gula 🍎!`;
}

console.log(buatJus(5, 2)); // Output: "Jus 5 apel + 2 sendok gula 🍎!"

console.log("First Class Citizen");
// Fungsi sebagai variabel
const potongApel = function(jumlah) {
    return jumlah * 4; // 1 apel dipotong jadi 4 🍴
};

// Fungsi sebagai parameter (higher-order function)
function prosesApel(apel, action) {
    return action(apel);
}

console.log(prosesApel(3, potongApel)); // 12


console.log("Default Parameter");
function buatPieApel(apel = 5) { 
    return `Pie dengan ${apel} apel 🥧`;
}

console.log(buatPieApel()); // "Pie dengan 5 apel 🥧"

console.log("Arrow Function");
// Bentuk biasa
const hitungApel = function(n) { return n + 1; };

// Arrow function
const hitungApel1 = n => n + 1; 

console.log(hitungApel(2)); // 3