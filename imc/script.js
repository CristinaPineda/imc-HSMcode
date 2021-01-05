
function limpar(){
	document.getElementById('peso').value = '';
	document.getElementById('altura').value = '';
	document.getElementById('result').value = '';
}

function calculaImc(){
	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;
	try{
		if(document.getElementById('peso').value == '' || document.getElementById('altura').value == '') throw "Não podem haver campos vazios!";
		if(document.getElementById('peso').value == 0) throw "O valor do peso não pode ser '0'!";
		if(document.getElementById('peso').value < 0) throw "O valor do peso não pode ser negativo!";
	}catch(e){
		alert(e);
		limpar();
	}
	var imc = (peso / (altura**2)).toFixed(2);
	if(isNaN(imc) || document.getElementById('peso').value == '' || document.getElementById('altura').value == ''){
		document.getElementById('result').value = 'Preencha o formulário! ;)';
		limpar();
	}else{
		document.getElementById('result').value = 'O valor do seu IMC é: '+ imc + ' confira sua classificação abaixo:';	
		alerta();
	}

	function alerta(){
		if(imc < 18.5){
        document.getElementById('1').style.color = 'darkred';
        document.getElementById('a').style.color = 'darkred';
	    }
	    else if(imc >= 18.5 && imc <= 24.9){
	        document.getElementById('2').style.color = 'darkred';
	        document.getElementById('b').style.color = 'darkred';
	    }
	    else if(imc >= 25 && imc <= 29.9){
	       document.getElementById('3').style.color = 'darkred';
	       document.getElementById('c').style.color = 'darkred';
	    }
	    else if(imc >= 30 && imc <= 39.9){
	        document.getElementById('4').style.color = 'darkred';
	        document.getElementById('d').style.color = 'darkred';
	    }
	    else{
	       document.getElementById('5').style.color = 'darkred';
	       document.getElementById('e').style.color = 'darkred';
    	}
	}	
}