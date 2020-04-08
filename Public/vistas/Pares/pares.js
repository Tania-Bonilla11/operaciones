$(document).ready(function () {
    
    $('#btnpar').click(function (e) { 
        e.preventDefault();
        let cantidad = $('#numero').val();
        let lista = cantidad.split(",").map(Number);
        let pares=[];
        let impares=[];

        lista.forEach(element => {
            if(element%2==0){  
               
                pares.push(element);
              
            }else{  
    
              impares.push(element); 
                  
            }  
             
        });      
        let lenght=pares.length;
        let lenght1=impares.length;
        $('#lblRespuesta').html(`los numeros pares son ${pares} y los numeros impares son ${impares}`);
        $('#lblRespuestaa').html(`cantidad pares son ${lenght} y la cantidad  impares son ${lenght1}`);
    

        
    });
      
});