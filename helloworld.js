function cekGenapGanjil(angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}

// Contoh penggunaan:
console.log(cekGenapGanjil(4));  // Output: "Genap"
console.log(cekGenapGanjil(7));  // Output: "Ganjil"

console.log("Pesan biasa");
console.log("User:", { nama: "Budi", umur: 25 });

console.error("Terjadi kesalahan!");

console.warn("Peringatan: Data belum lengkap");

console.info("Aplikasi berhasil dimuat");

const users = [
    { nama: "Budi", umur: 25 },
    { nama: "Ani", umur: 23 }
];
console.table(users);

console.group("User Detail");
console.log("Nama: Budi");
console.log("Umur: 25");
console.groupEnd();

console.time("Loop");
for(let i = 0; i < 1000000; i++) {
    // proses
}
console.timeEnd("Loop");

// Menggunakan typeof
console.log(typeof "Budi");      // "string"
console.log(typeof 25);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (ini adalah bug/quirk JavaScript)
console.log(typeof []);          // "object"
console.log(typeof {});          // "object"
console.log(typeof function(){}); // "function"

let nama = "Budi";
let umur = 25;

// Template literal memungkinkan ekspansi variabel dan multiple line
let profil = `Nama: ${nama}
Umur: ${umur} tahun`;

console.log(profil);
// Output:
// Nama: Budi
// Umur: 25 tahun

// Deklarasi number
let bilBulat = 42;        // integer
let bilDesimal = 3.14;    // floating-point
let negatif = -17;        // bilangan negatif
let eksponensial = 2e5;   // 200000 (notasi eksponensial)

// Operator aritmatika dasar
let a = 10;
let b = 3;

console.log(a + b);    // 13 (penjumlahan)
console.log(a - b);    // 7 (pengurangan)
console.log(a * b);    // 30 (perkalian)
console.log(a / b);    // 3.3333... (pembagian)
console.log(a % b);    // 1 (modulus/sisa pembagian)
console.log(a ** b);   // 1000 (pangkat)

let counter = 5;

// Increment (menambah 1)
counter++;     // counter = counter + 1
console.log(counter);   // 6

// Decrement (mengurangi 1)
counter--;     // counter = counter - 1
console.log(counter);   // 5

// Menggunakan Math object
console.log(Math.round(3.7));    // 4 (pembulatan ke terdekat)
console.log(Math.floor(3.7));    // 3 (pembulatan ke bawah)
console.log(Math.ceil(3.2));     // 4 (pembulatan ke atas)
console.log(Math.abs(-5));       // 5 (nilai absolut)
console.log(Math.sqrt(16));      // 4 (akar kuadrat)
console.log(Math.min(2, 5, 1));  // 1 (nilai terkecil)
console.log(Math.max(2, 5, 1));  // 5 (nilai terbesar)

// Nilai khusus
console.log(Infinity);           // representasi tak hingga
console.log(-Infinity);          // negatif tak hingga
console.log(NaN);               // Not a Number (hasil operasi yang tidak valid)

// Contoh yang menghasilkan NaN
console.log(0/0);               // NaN
console.log(parseInt("hello")); // NaN

let cuaca = "hujan";
if (cuaca === "cerah") {
    console.log("Waktunya piknik!");
} else if (cuaca === "mendung") {
    console.log("Bawalah payung");
} else if (cuaca === "hujan") {
    console.log("Tetap di dalam ruangan");
} else {
    console.log("Cuaca tidak dapat diprediksi");
}

let hari = "Senin";
switch (hari) {
    case "Senin":
        console.log("Awal minggu");
        break;
    case "Jumat":
        console.log("Akhir minggu kerja");
        break;
    default:
        console.log("Hari biasa");
}

let umurku = 20;
let status = umurku >= 18 ? "dewasa" : "remaja";
console.log(status);