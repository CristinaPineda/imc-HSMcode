
/*Instruções do projeto
Um professor de Educação Física precisa obter alguns dados sobre os 45 alunos da sua turma. Ele perguntará a cada um o nome, a idade, 
a altura (em metros) e o peso (em quilogramas).

Crie um programa que solicite os dados a cada um dos alunos e mostre:
a) o IMC (Índice de Massa Corporal) de cada estudante;
b) o estudante com maior IMC;
c) o estudante com menor IMC;
d) a altura média dos estudantes.

Além disso, o programa deve emitir um alerta para aqueles que fazem parte das classificações magreza e obesidade grau I, II ou III.

O IMC é calculado pela fórmula peso/altura² e as classificações são:

CLASSIFICAÇÃO 1
IMC: menor que 18,5
Classificação: Magreza
Obesidade: Grau 0

CLASSIFICAÇÃO 2
IMC: entre 18,5 e 24,9
Classificação: Normal
Obesidade: Grau 0

CLASSIFICAÇÃO 3
IMC: entre 25,0 e 29,9
Classificação: Sobrepeso
Obesidade: Grau I

CLASSIFICAÇÃO 4
IMC: entre 30,0 e 39,9
Classificação: Obesidade
Obesidade: Grau II

CLASSIFICAÇÃO 1
IMC: maior que 40,0
Classificação: Obesidade grave
Obesidade: Grau III

Suba o código para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/
// inicializando as variáveis que serão necessárias para o código.
var alunos = 0;
var nome = []; // a lista é criada vazia pois seram acrescentados os valores a cada interação com o usuário
var idade = [];
var altura = [];
var peso = [];
var valorimc = [];

//inicio do laço Do..While que será responsável pela entrada dos dados dos alunos, adicionando os valores nas variáveis correspondentes
do{
	
	var name = prompt('Qual o seu nome?');
	nome.push(name); // inclui o valor digitado pelo usuário na lista de nomes
	var age = prompt('Qual sua idade?');
	idade.push(age); // inclui o valor digitado pelo usyário na lista de idades
	var height = prompt('Qual a sua altura?');
	altura.push(height); // inclui o valor digitado pelo usyário na lista de alturas
	var weight = prompt('Qual o seu peso?');
	peso.push(weight);	// inclui o valor digitado pelo usyário na lista de pesos
	var imc = weight / (height**2); // calcula o valor do imc 
	var imc1 = imc.toFixed(2);  // fixa a quantidade de casas decimais no valor do imc
	valorimc.push(imc1); // inclui o valor digitado pelo usyário na lista de valores de imc
	alert('Seu IMC é: '+ imc1)

	alerta(); // chama a função que irá dizer ao usuário a classe em que está incluso de acordo com o valor do imc
	alunos += 1; //incrementa o valor do contador de alunos ()

}while(alunos <= 44); // condição para que o loop funcione, são 44 pois o '0'´conta como posição dentro da lista 

maiorMenor(); // chama a função que irá mostrar qual o menor e o maior valor de imc calculado durante o laço do...while

mediaAltura(); // chama a função que irá mostrar qual a altura média de acordo com as idades inseridas durante o laço do...while

function alerta(){    //função de emissão de alerta sobre a classificação do imc 
    if(imc < 18.5){  // de acordo com cada índice de imc calculado é disparado um alerta para o usuário
        alert('Você está na classificação 1, MAGREZA! Obesidade: grau 0');
    }
    else if(imc >= 18.5 && imc <= 24.9){
        alert('Você está na classificação 2, NORMAL! Obesidade: grau 0');
    }
    else if(imc >= 25 && imc <= 29.9){
        alert('Você está na classificação 3, SOBREPESO! Obesidade: grau I');
    }
    else if(imc >= 30 && imc <= 39.9){
        alert('Você está na classificação 4, OBESIDADE! Obesidade: grau II');
    }
    else{
        alert('Você está na classificação 5, OBESIDADE GRAVE! Obesidade: grau III');
    }
}

function maiorMenor(){ //função que encontra o maior e menor indice de imc calculado

	var imcMaior = 0; // a varável inicia em '0' pois queremos que o valor seja maior
	for(var i = 0; i < valorimc.length; i++){ // a variável 'i' irá passsar em cada uma das posições da lista de valores de imc  
	    if(valorimc[i] > imcMaior){
	        imcMaior = valorimc[i]; // o maior valor imc encontrado é atribuido à variável 'imcMaior' 
	     }
	}

	var imcMenor = imcMaior; // a variável inicia com o maior valor pois queremos encontrar o menor
	for(var i = 0; i < valorimc.length; i++){ // a variável 'i' irá passsar em cada uma das posições da lista de valores de imc 
	    if(valorimc[i] < imcMenor){
	        imcMenor = valorimc[i]; // o menor valor imc encontrado é atribuido à variável 'imcMenor' 
	     }
	}
	document.write('O maior IMC calculado é: '+ imcMaior, ' e o menor IMC calculado é: '+ imcMenor +'.');
}

function mediaAltura(){ //função que calcula a média das alturas inseridas na lista de alturas
	var soma = 0; //primeiro vamos somar todos os valores da lista 
	for(var x=0; x < altura.length; x++){ // a vaiavel x vai passar por cada uma das posições dentro da lista de altura 
		soma += parseFloat(altura[x]); // a função 'parseFloat' é usada pois os valores inseridos no prompt durante o laço são armazenados como strings e queremos somar valores em números para o cálculo da média
	} 
	var media = soma / 45 ; //cálculo da média (aqui dividimos por 45 pois é a quantidade de alunos)
	var mediaDaAltura = media.toFixed(2); //fixa a quantidade de números decimais
	document.write('\nA altura média dos alunos é: '+ mediaDaAltura); 
}

//Cristina Pineda.