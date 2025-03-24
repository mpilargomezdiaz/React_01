import React from "react";

export default function Poblacion() {
    return (
      <label>
        Población:
        <div>
        <select name="selectedPoblacion">
          <option value="alicante">Alicante</option>
          <option value="madrid">Madrid</option>
          <option value="sevilla">Sevilla</option>
          <option value="valencia">Valencia</option>
        </select>
        </div>
      </label>
    );
  }