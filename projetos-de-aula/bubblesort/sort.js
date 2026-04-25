const numeros = [];

for (let i = 0; i < 10; i++) {
    const n = Math.round(Math.random() * 100);
}

console.log(numeros);

console.log(numeros.sort((a, b) => a - b));
console.log(numeros.sort((a, b) => b - a));