alert ('Boas VIndas ao Jogo do número secreto ඞ');
let numeroMaximo = 4000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`coloque um número entre 1 e ${numeroMaximo}`);

    if (numeroSecreto == chute) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`o numero secreto é menor que ${chute}`) ;
        } else {
            alert(`o numero secreto é maior que ${chute}`) ;
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Poggers! Você acertou o número! ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
