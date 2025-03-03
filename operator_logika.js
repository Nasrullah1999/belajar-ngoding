let usia = 25;
let punyaSIM = true;

// Memeriksa apakah seseorang boleh mengemudi
if (usia >= 17 && punyaSIM) {
    console.log("Anda boleh mengemudi");
} else {
    console.log("Anda belum boleh mengemudi");
}

// AND juga bisa digunakan untuk lebih dari dua kondisi
let saldo = 1000000;
let verifikasi = true;
let limitHarian = false;

if (saldo >= 500000 && verifikasi && !limitHarian) {
    console.log("Transaksi dapat diproses");
}

let metodePembayaran = "transfer";

// Memeriksa metode pembayaran yang valid
if (metodePembayaran === "transfer" || metodePembayaran === "kartu kredit" || metodePembayaran === "e-wallet") {
    console.log("Metode pembayaran diterima");
}

// OR berguna untuk nilai default
let namaPengguna = "";
let displayName = namaPengguna || "Tamu"; // Jika namaPengguna kosong, gunakan "Tamu"

let sistemMaintenance = false;

// Memeriksa apakah sistem bisa diakses
if (!sistemMaintenance) {
    console.log("Sistem dapat diakses");
}

// NOT sering digunakan untuk memeriksa nilai yang tidak ada
let data = null;
if (!data) {
    console.log("Data tidak tersedia");
}

let cuaca = "cerah";
let waktu = "pagi";
let akhirPekan = true;

// Mengkombinasikan beberapa kondisi
if ((cuaca === "cerah" || cuaca === "berawan") && (waktu === "pagi" && !akhirPekan)) {
    console.log("Waktu yang tepat untuk jogging!");
}else(console.log("Tidak ada waktu untuk jogging"));

// AND menghentikan evaluasi saat menemukan nilai false
console.log(false && console.log("Tidak akan dicetak")); // false

// OR menghentikan evaluasi saat menemukan nilai true
console.log(true || console.log("Tidak akan dicetak")); // true

// Ini sering digunakan untuk pengecekan nilai null/undefined
let user = {
    nama: "Budi",
    settings: null
};

// Hanya mengakses preferences jika settings ada
let tema = user.settings && user.settings.preferences;