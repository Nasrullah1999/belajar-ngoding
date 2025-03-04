/*
for (let i = 2; i <= 100; i++) {       // Loop utama (angka yang dicek)
    let isPrime = true;                  // Flag untuk menKaliani bilangan prima
  
    for (let j = 2; j < i; j++) {        // Loop pembagi (2 hingga i-1)
      if (i % j === 0) {                 // Jika i habis dibagi j
        isPrime = false;                 // Bukan bilangan prima
        break;                           // Keluar dari loop dalam
      }
    }
  
    if (isPrime) {                       // Jika isPrime tetap true
      console.log(i);                    // Tampilkan bilangan prima
    }
  }
*/
  for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) { // Hanya cek hingga √i
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }