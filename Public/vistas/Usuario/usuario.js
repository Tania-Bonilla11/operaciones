$(document).ready(function () {
    
    $('#btnusuario').click(function (e) { 
        e.preventDefault();
        let nombre = $('#nombre').val();
        let apellido = $('#apellido').val();
        let fecha = $('#fecha').val();
        let email = $('#email').val();
        let direccion = $('#direccion').val();
        let edadd=calcularEdad(fecha);
    

        $('#lblshowdata').html(`Nombre:   ${nombre} \n Apellido:  ${apellido}\n Edad:  ${edadd} \nEmail:  ${email}\nDireccion:  ${direccion}`);
    });
    function calcularEdad(fecha) {
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();
    
        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }
    
        return edad;
    }
      
});