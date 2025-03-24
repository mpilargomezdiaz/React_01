import React from "react";


export default function Nombre() {
    return (
        <div>
        <label>Nombre:</label>
        <div>
        <input
        type="text"
        placeholder="Ej. María"
        maxlength="50"
        />
        </div>
        </div>
    );
}