
function validarNombre(){
    let nombre=document.getElementById("nombre").value;
    console.log(nombre);
    let formato=/^[a-zA-Z]{3}$/;
    if(nombre==""){
        document.getElementById("errorNombre").style.display="block";
        document.getElementById("errorNombre").innerHTML="El campo es obligatorio";
    }
    else{ if(!formato.test(nombre)){
        document.getElementById("errorNombre").style.display="block";
        document.getElementById("errorNombre").innerHTML="Ingrese caracteres válidos (solo letras)";
        }
        else{
            document.getElementById("errorNombre").style.display="none";        
        }       
    }
}

function validarTelefono(){
    let telefono=document.getElementById("telefono").value;
    console.log(telefono);
    let formato=/^3[0-9]{2}-[0-9]{4}-[0-9]{3}$/;
    if(telefono==""){
        document.getElementById("errorTelefono").style.display="block";
        document.getElementById("errorTelefono").innerHTML="El campo es obligatorio";
    }
    else{ if(!formato.test(telefono)){
        document.getElementById("errorTelefono").style.display="block";
        document.getElementById("errorTelefono").innerHTML="El formato debe ser 3XX-XXXX-XXX";
        }
        else{
            document.getElementById("errorTelefono").style.display="none";        
        }       
    }
}

document.getElementById("nombre").addEventListener("blur",validarNombre);
document.getElementById("telefono").addEventListener("blur",validarTelefono);

function enviarFormulario(){
    console.log("Enviando formulario");
}
document.getElementById("btnEnviar").addEventListener("click",enviarFormulario);