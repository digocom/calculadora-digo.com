function calcularParcela() {
  const valor = parseFloat(document.getElementById("valor").value);
  const parcelas = parseInt(document.getElementById("parcelas").value);

  if (isNaN(valor) || valor <= 0 || isNaN(parcelas) || parcelas < 1 || parcelas > 6) {
    document.getElementById("resultado").innerHTML = "<p>Insira um valor e número de parcelas válido (1 a 6).</p>";
    return;
  }

  const acrescimo = valor * 0.10;
  const totalComAcrescimo = valor + acrescimo;
  const valorParcela = (totalComAcrescimo / parcelas).toFixed(2);

  const resultadoHTML = `
    <table>
      <tr><th>Parcelas</th><th>Valor da Parcela</th><th>Total com Acréscimo</th></tr>
      <tr>
        <td>${parcelas}x</td>
        <td>R$ ${valorParcela}</td>
        <td>R$ ${totalComAcrescimo.toFixed(2)}</td>
      </tr>
    </table>
  `;

  document.getElementById("resultado").innerHTML = resultadoHTML;
}
