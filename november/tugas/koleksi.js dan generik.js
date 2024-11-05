// Menggunakan List (Array)
let listMahasiswa = ["apid", "aceng", "ahmad"];
listMahasiswa.push("Abel"); // Menambahkan elemen baru
console.log(listMahasiswa); // Output: ["Budi", "Siti", "Agus", "Ani"]

// Menggunakan Set
let setMahasiswa = new Set(["apid", "aceng", "ahmad"]);
setMahasiswa.add("bolu");
setMahasiswa.add("dede"); // Tidak akan menambahkan karena Budi sudah ada
console.log(setMahasiswa); // Output: Set(4) {"Budi", "Siti", "Agus", "Ani"}

// Menggunakan Map
let mapNilai = new Map();
mapNilai.set("apid", 90);
mapNilai.set("aceng", 85);
console.log(mapNilai.get("apid")); // Output: 90
