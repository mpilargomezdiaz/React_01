import React from "react";

export default function OpcionesAd(){
    return(
        <div>
            <div>
        <input type="checkbox" name="opcionesad" value="opcion1" defaultChecked/> Deseo recibir informacion sobre novedades y ofertas
        </div>
        <div>
        <input type="checkbox" name="opcionesad" value="opcion2"/> Declaro haber leido y aceptar las condiciones generales del programa y la normativa sobre proteccion de datos.
    </div>
    </div>
    );
}