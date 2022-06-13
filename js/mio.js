
/* PARA TRABAJAR CON HOJA DE ESTILOS */
/* PARA AGREGAR UN EVENTO */
var texto = document.getElementById('usuario')
var bt = document.getElementById('botón')



bt.addEventListener('click',function ocultar_usuario(){
    texto.classList.add('cajaoculta');
});

//-------------------//
//Función de comando//
//-----------------//
function cambiar_color(){
    bt.classList.add('cambiobt');
}

/*------EVENTOS------*/

bt.addEventListener('click',cambiar_color);
