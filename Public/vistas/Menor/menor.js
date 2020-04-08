$(document).ready(function () {
    $('#btnmenor').click(function (e) { 
        e.preventDefault();
        let cantidad = $('#numero').val();
        let lista = cantidad.split(",").map(Number);
       let max=0,minimo=0;

       let min=  minimo = lista[0];

        for(var i=0;i<lista.length;i++){
             if(lista[i]<min){
              min=lista[i];
            }else{
              max=lista[i];
            }
        }
                
        $('#lblRespuestamenor').html(`El numero mayor es ${max} y el numero menor es ${min}`);
        
    });
      
});