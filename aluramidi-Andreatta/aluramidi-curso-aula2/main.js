function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
 
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

//o que é uma constante...
const listaDeTeclas = document.querySelectorAll('.tecla'); 


let  contador = 0;

while (contador <9) {

    listaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1; 
    console.log(contador);
}




//document.querySelector('.tecla_pom').onclick = tocaSomPom;

//document.querySelector('.tecla_pom');
//document.querySelector('#som_tecla_pom').play();

100


let inicia = true;
let valor1, valor2, valor3;

if (inicia) {
  valor1 = 100;
  valor2 = 200;
  valor3 = valor1 + valor2;
  console.log("Valor 1 é " + valor1);
  console.log("Valor 2 é " + valor2);
  console.log("Valor 3 é " + valor3);
}

console.log("Valor 1 fora do bloco if é " + valor1);
console.log("Valor 2 fora do bloco if é " + valor2);
console.log("Valor 3 fora do bloco if é " + valor3);
