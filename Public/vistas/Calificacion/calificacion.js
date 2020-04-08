$(document).ready(function () {
	$('#btncalcular').click(function (e) { 
		e.preventDefault();
		var  inputt= $('#txtdatos').val();
		var arreglo=inputt.split(",");
		

		reprobado(arreglo);	
		 bueno(arreglo);
		 muybueno(arreglo);
		 excelente(arreglo);
	
	});
});

function reprobado(arreglo) {
	var suma=0;

	arreglo.forEach(index => {
		if(index>=0 && index<=5){
			console.log(suma+=index.length);
		}

	});
		
	$('#resp').html(`promedio de reprobados: ${parseFloat(suma)}`);
}
	

function bueno(arreglo){
	var suma2=0;
	arreglo.forEach(index2 => {
		if(index2>=5 && index2<=7){
			console.log(suma2+=index2.length);
		}
	});	
	
	$('#resp2').html(`promedios buenos: ${parseFloat(suma2)}`);
}
function muybueno(arreglo){
	var suma3=0;
	arreglo.forEach(index3 => {
		if(index3>7 && index3<=8){
			console.log(suma3+=index3.length);
			
		}
	});	
	
	$('#resp3').html(`promedios muy buenos: ${parseFloat(suma3)}`);
}

function excelente(arreglo){
	var suma4=0;
	arreglo.forEach(index4 => {
		if(index4>8 && index4<=10){
			console.log(suma4+=index4.length);
			
		}
	});	
	
	$('#resp4').html(`promedios Execelente: ${parseFloat(suma4)}`);
}