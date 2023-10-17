const $cambiarinte = document.getElementById("cambiarinte"),
      $cambiarfoco = document.getElementById("cambiarfoco"),
      $switch = document.getElementById("switch");

function cambiar(){
    if($cambiarfoco.src.match("img/foco-encendido.png") && $cambiarinte.src.match("img/boton-encendido.jpg")){
        $cambiarfoco.src = "img/foco-apagado.png";
        $cambiarinte.src = "img/boton-apagado.jpg";
    }else{
        $cambiarfoco.src = "img/foco-encendido.png";
        $cambiarinte.src = "img/boton-encendido.jpg";
    }
}

$switch.addEventListener("click",cambiar);