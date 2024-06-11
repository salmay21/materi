function hitung() {
    const tipeSekuens = document.getElementById("tipe-sekuens").value;
    const sukuPertama = parseFloat(document.getElementById("suku-pertama").value);
    const nomorSuku = parseInt(document.getElementById("nomor-suku").value);
    const bedaAtauRasio = parseFloat(document.getElementById("beda-atau-rasio").value);

    let hasil = "";

    if (tipeSekuens === "aritmatika") {
        const sukuKeN = sukuPertama + (nomorSuku - 1) * bedaAtauRasio;
        hasil += `Suku ke-${nomorSuku} dari baris aritmatika adalah: ${sukuKeN}.`;

    } else if (tipeSekuens === "geometri") {
        const sukuKeN = sukuPertama * Math.pow(bedaAtauRasio, nomorSuku - 1);
        hasil += `Suku ke-${nomorSuku} dari baris geometri adalah: ${sukuKeN}.`;

        if (bedaAtauRasio === 1) {
            const jumlahSuku = nomorSuku * sukuPertama;
            hasil += ` Jumlah ${nomorSuku} suku pertama adalah: ${jumlahSuku}.`;
        } 
    }

    document.getElementById("hasil").textContent = hasil;
}

function hapus() {
    document.getElementById("suku-pertama").value = "";
    document.getElementById("beda-atau-rasio").value = "";
    document.getElementById("nomor-suku").value = "";
    document.getElementById("hasil").textContent = "";
}
