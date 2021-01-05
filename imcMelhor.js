/*
Instruções do projeto
Na atividade do Projeto 2 desta disciplina, você precisou criar um sistema para calcular o IMC de 45 alunos. 
O cálculo feito foi uma divisão, mas não é possível realizar essa conta se o divisor for zero. 
Porém nenhum tipo de validação foi realizado, o que pode fazer com que o usuário entre com o valor zero para o peso.

Para solucionar essa questão, você deve melhorar seu código inserindo um tratamento de exceção 
para o caso da inserção de um valor de peso igual a zero. Realize o tratamento também para o caso 
de um usuário inserir um valor decimal com vírgula ao invés de usar um ponto.

Suba o código para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que 
outros desenvolvedores possam analisá-lo.
*/

// inicializando as variáveis que serão necessárias para o código.
	
alunos = 0;
nome = []; 
idade = [];
altura = [];
peso = [];
valorimc = [];


while(alunos <= 44){
	calculo();	
	alerta(); 
}

maiorMenor(); 
mediaAltura(); 

function calculo(){
	var name = prompt('Qual o seu nome?');
	try{
		if(name == '') throw 'Esse campo não pode ficar vazio!'
	}catch(e){
		alert(e)
		name = prompt('Qual o seu nome?')
	}
	nome.push(name);

	var age = prompt('Qual sua idade?');
	try{
		if(age == '') throw 'Esse campo não pode ficar vazio!'
	}catch(e){
		alert(e)
		age = prompt('Qual sua idade?');
	}
	idade.push(age); 

	var height = prompt('Qual a sua altura?	Digite sem pontos ou virgulas.');
	try{
		if(height == '') throw 'Esse campo não pode ficar vazio!'
	}catch(e){
		alert(e)
		height = prompt('Qual a sua altura?')
	}
	var height1 = formatarNumero(height);
	altura.push(height1);

	var weight = prompt('Qual o seu peso?');
	try{
		if(weight == '') throw 'Esse campo não pode ficar vazio!'
	}catch(e){
		alert(e)
		weight = prompt('Qual o seu peso?')
	}
	peso.push(weight);	

	imc = weight / (height1**2);  
	var imc1 = imc.toFixed(2);  
	valorimc.push(imc1); 

	alert('Seu IMC é: '+ imc1)
	alunos += 1;
}

function alerta(){ 
    if(imc < 18.5){
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

function maiorMenor(){ 

	var imcMaior = 0;
	for(var i = 0; i < valorimc.length; i++){  
	    if(valorimc[i] > imcMaior){
	        imcMaior = valorimc[i]; 
	     }
	}

	var imcMenor = imcMaior; 
	for(var i = 0; i < valorimc.length; i++){  
	    if(valorimc[i] < imcMenor){
	        imcMenor = valorimc[i]; 
	     }
	}
	document.write('O maior IMC calculado é: '+ imcMaior, '<br> O menor IMC calculado é: '+ imcMenor +'.');
}

function mediaAltura(){ 
	var soma = 0; 
	for(var x=0; x < altura.length; x++){  
		soma += parseFloat(altura[x]); 
	} 
	var media = soma / 45 ; 
	var mediaDaAltura = media.toFixed(2); 
	document.write('<br> A altura média dos alunos é: '+ mediaDaAltura); 
}

function formatarNumero(n) {
    n = n.toString();
    r = '';
    x = 0;

    for (var i = n.length; i > 0; i--) {
        r += n.substr(i - 1, 1) + (x == 1 && i != 1 ? '.' : '');
        x = x == 1 ? 0 : x + 1;
    }

    return r.split('').reverse().join('');
}
//Cristina Pineda.
