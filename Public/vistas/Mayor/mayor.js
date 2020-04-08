$(document).ready(function () {
    
    $('#btnmayor').click(function (e) { 
        e.preventDefault();
        let cantidad = $('#numero').val();
        let lista = cantidad.split(",").map(Number);
       let mayor=[];
       let maximo = 0;

        lista.forEach(element => {
           if(maximo<element){
               maximo= element;     
           }
             
        });    
         
        $('#lblRespuestamayor').html(`El numero mayor es ${maximo} `);
       

        
    });
      
});