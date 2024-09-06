const u = 'cbgutierrezc@unimagdalena.edu.co';
const c = '1234';

function login(){
    const usuario = document.getElementById('Usuario');
    const contraseña = document.getElementById('Contraseña');

    if(usuario.value == u && contraseña.value == c){

    }
    else{
        alert("Usuario y/o contraseña incorrecta");
    }
}

function visualizar() {
    const passwordInput = document.getElementById('Contraseña');
    const icon = document.getElementById('icono');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('bxs-lock-alt');
        icon.classList.add('bxs-lock-open'); 
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('bxs-lock-open');
        icon.classList.add('bxs-lock-alt');
    }
}