function calculateArithmetic() {
    const a = parseInt(document.getElementById('aArithmetic').value);
    const b = parseInt(document.getElementById('bArithmetic').value);
    const n = parseInt(document.getElementById('nArithmetic').value);

    if (isNaN(a) || isNaN(b) || isNaN(n)) {
        alert('Masukkan angka yang valid!');
        return;
    }

    const un = a + (n - 1) * b;
    const sn = (n * (2 * a + (n - 1) * b)) / 2;
    document.getElementById('unArithmetic').value = un;
    document.getElementById('snArithmetic').value = sn;

    let series = '';
    for (let i = 0; i < Math.min(n, 4); i++) {
        series += (a + i * b) + ', ';
    }
    if (n > 4) {
        series += '..., ' + (a + (n - 1) * b);
    }
    document.getElementById('seriesArithmetic').value = series;
}

function calculateGeometric() {
    const a = parseInt(document.getElementById('aGeometric').value);
    const r = parseInt(document.getElementById('rGeometric').value);
    const n = parseInt(document.getElementById('nGeometric').value);

    if (isNaN(a) || isNaN(r) || isNaN(n)) {
        alert('Masukkan angka yang valid!');
        return;
    }

    const un = a * Math.pow(r, n - 1);
    const sn = a * (Math.pow(r, n) - 1) / (r - 1);
    document.getElementById('unGeometric').value = Math.round(un);
    document.getElementById('snGeometric').value = Math.round(sn);

    let series = '';
    for (let i = 0; i < Math.min(n, 4); i++) {
        series += Math.round(a * Math.pow(r, i)) + ', ';
    }
    if (n > 4) {
        series += '..., ' + Math.round(a * Math.pow(r, n - 1));
    }
    document.getElementById('seriesGeometric').value = series;
}
