// Kelas abstrak tidak dapat diinstansiasi secara langsung
class Kendaraan {
    constructor(jenis) {
        if (this.constructor === Kendaraan) {
            throw new Error("Kelas Kendaraan adalah kelas abstrak dan tidak dapat diinstansiasi.");
        }
        this.jenis = jenis;
    }

    // Metode abstrak
    bergerak() {
        throw new Error("Metode 'bergerak()' harus diimplementasikan.");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Bajaj extends Kendaraan {
    constructor() {
        super('Bajaj');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak dengan roda.`);
    }
}

class Perahu extends Kendaraan {
    constructor() {
        super('Perahu');
    }

    bergerak() {
        console.log(`${this.jenis} bergerak di atas air.`);
    }
}

// Penggunaan
const bajaj = new Bajaj();
bajaj.bergerak(); // Output: Bajaj bergerak dengan roda.

const perahu = new Perahu();
perahu.bergerak(); // Output: Perahu bergerak di atas air.
