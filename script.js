function calcular() {
    var nome = document.getElementById('nome').value;
    var idade = parseFloat(document.getElementById('idade').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var femSelecionado = document.getElementById('fem').checked;
    var mascSelecionado = document.getElementById('masc').checked;

    var resultadoElement = document.getElementById('resultado');

    if (femSelecionado) {
        var resultadoCalculado = 447.593 + (9.247 * peso) + (3.098 * altura) - (4.330 * idade);
        var resultadoFormatado = resultadoCalculado.toFixed(0);
        var resultadoFinal = "Seu metabolismo basal é: " + resultadoFormatado + " KCAL";

        sessionStorage.setItem('resultado', resultadoFinal);
        mostrarResultado();
    } else {
        if (nome.trim() !== "") {
            var resultadoCalculado = 88.362 + (13.397 * peso) + (4.799 * altura) - (5.677 * idade);
            var resultadoFormatado = resultadoCalculado.toFixed(0);
            var resultadoFinal = nome + ", seu metabolismo basal é: " + resultadoFormatado + " KCAL";

            sessionStorage.setItem('resultado', resultadoFinal);
            mostrarResultado();
        } else {
            resultadoElement.textContent = "Por favor, insira seu nome.";
        }
    }
}

function mostrarResultado() {
    var resultadoElement = document.getElementById('resultado');
    var resultadoArmazenado = sessionStorage.getItem('resultado');

    if (resultadoArmazenado) {
        resultadoElement.textContent = resultadoArmazenado;
    }
}