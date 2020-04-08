$(document).ready(function () {
    
    $('#btnpar').click(function (e) { 
        e.preventDefault();
        let cantidad = $('#numero').val();
        let lista = cantidad.split(",").map(Number);
        let pares=[];
        let impares=[];
        var idx=[];
       
        
        lista.forEach(element => {
            if(element%2==0){
                pares.push(element);
                
            }else{
              impares.push(element);          
            }   
        });      
        $('#lblRespuesta').html(`los numeros pares son ${pares} y los numeros impares son ${impares}`);
    

        
    });
      
});