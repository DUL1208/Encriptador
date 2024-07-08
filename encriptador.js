let texto = document.getElementById('text');
let imagen = document.getElementById('imagen');
let resultado = document.getElementById('resultado');
let copiar = document.getElementById('copiar');
let error = document.getElementById('error');
let acentos = /[ÁÉÍÓÚÜÑáéíóúüñ]/;
let encriptacion = texto => {
    return texto
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}
let desencriptacion = texto => {
    return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
}

let  textoFinal = '';

function verAcentos( texto ) {
    let resultado = acentos.test( texto )
    if ( resultado != false ) {
        error.classList.add( "error" ); 
    } else {
        error.classList.remove( "error" );
    }
    return  resultado;
}

function encriptar() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos( textoInicial );
    if ( textoInicial.trim() == '' ) {
        window.location.reload();
    }
    else if ( textoInicial != ''  &&  acento != true ) {
        textoFinal = encriptacion( textoInicial );
        imagen.classList.add( "ocultarImagen" );
        resultado.textContent = textoFinal;
        copiar.removeAttribute('hidden');
        limpiarCaja();
    }    
    
}
function limpiarCaja(){
    document.querySelector('#text').value ='';
    
}
function limpiarResultado(){
    document.querySelector('#resultado').value='';
}
function desencriptar() {
    textoFinal = '';
    let textoInicial = texto.value.toLowerCase();
    let acento = verAcentos( textoInicial );
    if ( textoInicial.trim() == '' ) {
        window.location.reload();
    }
    else if ( textoInicial != ''  &&  acento != true ) {
        textoFinal = desencriptacion( textoInicial );
        imagen.classList.add( "ocultarImagen" );
        resultado.textContent = textoFinal;
        copiar.removeAttribute('hidden');
        limpiarResultado();
    }    
    limpiarCaja();
}

copiar.addEventListener('click', ()=>{
    navigator.clipboard.writeText( textoFinal );
    
})
