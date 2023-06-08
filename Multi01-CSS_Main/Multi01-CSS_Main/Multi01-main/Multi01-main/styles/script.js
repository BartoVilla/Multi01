/*validacion formulario re club*/

function validarformulario() 

    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;


if (email.trin() === "") {
    alert ("Por favor ingresa tu email");
    return false;
}

if (contraseña.trin() === "") {
    alert ("Por favor ingresa tu contraseña");
    return false;
}

var mensaje = "Los datos ingresados son /.email"

alert (mensaje);
