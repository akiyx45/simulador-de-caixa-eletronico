const numeros = [];

for (let i = 0; i< 10; i++) {
    const n = Math.round(Math.random() * 100);
    numeros.push(n)
}

console.log(numeros);

const tamanho = numeros.length;

for (let x = 0; x < tamanho; x++) {
    let i = 0;
    for (let y = 1; y < tamanho; y++) {
        if(numeros[i] > numeros[i + 1]) {
            const temp = numeros[i];
            numeros[i] = numeros[i + 1];
            numeros[i + 1] = temp;
        }
        i = i + 1;
    }
}