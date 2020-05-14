<?php
    $destino = "adrian.ocana@inslapineda.cat";
    $nombre = $_POST["nombre"];
    $mail = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    $contenido = "Nombre: $nombre" . "\nEmail: $mail" . "\nMensaje: $mensaje";
    
    mail($destino,"CONTACTO FORMULARIO", $contenido);
    header("location:contacto.html")
?>
