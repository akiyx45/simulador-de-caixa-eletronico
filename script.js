var saldo = Number(prompt('Digite o seu saldo: '));

const $inputSaque = document.getElementById('valordosaque');
const $displaySaldo = document.getElementById('saldo');
const $displayMensagem = document.getElementById('mensagem');

$displaySaldo.innerText = saldo;

function realizarSaque() {
    const valordosaque = $inputSaque.value;
    console.log("valor do saque", valordosaque);

    if (Number(valordosaque) > saldo) {
        $displayMensagem.innerText = 'Saldo insuficiente para realizar o saque.';
        return
    }

    saldo = saldo - Number(valordosaque);
    $displaySaldo.innerText = saldo;

    $displayMensagem.innerText = 'Saque realizado com sucesso!';
}