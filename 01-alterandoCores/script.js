const btn = document.getElementById('alterColor');
function colorMap(){
  // CRIAÇÃO DA ARRAY COM AS CORES DESEJADAS
  const colors = ['#161F30', '#84B026', '#3D3D3D', '#F2E857', '#F26D3D', '#FF3C3C', '#FFFCFA', '#FF4713', '#141D29', '#FFCFBF', '#58595B', '#A62E2E'];

  // DECLARAÇÃO DA VARIAVEL QUE RECEBE O CAMPO QUE SERÁ MOSTRADO O HEXADECIMAL DA COR ( OU O NOME )
  const colorText = document.getElementById('colorName')

  // CONTABILIZANDO O TOTAL DE ITENS NA ARRAY
  let arrayNumbers = colors.length;

  // CRIANDO UMA FUNÇÃO QUE RETORNA UM NUMERO ALEATORIO ENTRE O TAMANHO TOTAL DA ARRAY - O METODO MATH.FLOOR ARREDONDA O NUMERO QUEBRADO QUE O METODO .RANDOM RETORNA.
  function randomNumbers(){
    return Math.floor(Math.random() * arrayNumbers);
  }

  let finalNumber = randomNumbers();

  document.body.style.backgroundColor = colors[finalNumber];
  colorText.textContent = colors[finalNumber];
  colorText.style.backgroundColor = colors[finalNumber]
}
btn.addEventListener('click', colorMap);
