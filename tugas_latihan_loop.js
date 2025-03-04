console.log("Soal 1");
// Modifikasi program untuk menampilkan bukan bilangan prima dari 1 hingga 100.
for (let i = 2; i <= 100; i++) {       // Loop utama (angka yang dicek)
    let isPrime = true;                  // Flag untuk menKaliani bilangan prima
  
    for (let j = 2; j < i; j++) {        // Loop pembagi (2 hingga i-1)
      if (i % j === 0) {                 // Jika i habis dibagi j
        isPrime = false;                 // Bukan bilangan prima
        break;                           // Keluar dari loop dalam
      }else if(i % j !== 0){
isPrime = true;
break;
      }
    }
  
    if (isPrime ===false){          // Jika isPrime false
      console.log(i);                    // Tampilkan bukan bilangan prima
    }
  }

console.log("Soal 2");
  // Hitung jumlah bilangan prima dari 1 hingga 100.

    let hitung = 0;
    for (let i = 2; i <= 100; i++) {       // Loop utama (angka yang dicek)
        let isPrime = true;                  // Flag untuk menKaliani bilangan prima
      
        for (let j = 2; j < i; j++) {        // Loop pembagi (2 hingga i-1)
          if (i % j === 0) {                 // Jika i habis dibagi j
            isPrime = false;                 // Bukan bilangan prima
            break;                           // Keluar dari loop dalam
          }
        }
      
        if (isPrime) {                       // Jika isPrime tetap true
          hitung++;                    // Tampilkan bilangan prima
        }
      }
      console.log("Jumlah bilangan prima dari 1-100 ada : "+hitung);

console.log("Soal 3");
// Buat program untuk mengecek apakah sebuah angka yang diinput pengguna adalah bilangan prima.

let angka = 100; // masukkan angka yang ingin di cek
let isPrime = true;
for (let j=2; j<angka;j++){
    if(angka % j === 0){
        isPrime = false;
        console.log(`${angka} bukan bilangan prima`);
        break;
    }else if(angka % j !== 0){
        isPrime = true;
        console.log(`${angka} adalah bilangan prima`);
        break;
    }
}

