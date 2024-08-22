function calcularSoma() {
    // Pega os números digitados nos campos de entrada
    var númeroA = parseFloat(document.getElementById('númeroA').value);
    var númeroB = parseFloat(document.getElementById('númeroB').value);

   // Verifica se os números são validos (ou seja, se são números mesmo) 
   if (!isNaN(númeroA) && !isNaN(númeroB)){
     // Realiza a soma dos números 
     var resultado = númeroA + númeroB;

     // Exibe o resultado na página
     document.getElementById('resultado').innerHTML = "A soma de " + númeroA + "é: " + resultado;

   } else {
     // Se os números não forem válidos, pede para digitar números corretos
     document.getElementById('resultado').innerHTML=
      "Por favor, digite números válidos.";
   }
   
}
function limparTela() {
  // Apaga o comteúdo do campo "resultado"
  document.getElementById("resultado").innerHTML = "";

  // Apaga o comteúdo dos campos "numeroA" e "numero8" (opicional)
  document.getElementById("numeroA").valeu = "";
  document.getElementById("numeroB").valeu = "";

}