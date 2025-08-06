function calcular() {
    const valor = parseFloat(document.getElementById("valor").value);
    if (isNaN(valor)) {
        document.getElementById("resultado").innerText = "Por favor, insira um número válido.";
        return;
    }
    const resultado = valor * 1.1;
    document.getElementById("resultado").innerText = `Total com acréscimo: R$ ${resultado.toFixed(2)}`;
}
