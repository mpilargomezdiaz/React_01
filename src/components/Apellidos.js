import React from "react";


export default function Apellidos() {
    return (
        <div>
        <label>Apellidos:</label>
        <div>
        <input
        type="text"
        placeholder="Ej. Gómez Fernández"
        maxlength="50"
        />
        </div>
        </div>
    );
}