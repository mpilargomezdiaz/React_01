import React, { useState } from "react";

export default function Genero() {
    const [selectedGender, setSelectedGender] = useState("");

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    return (
        <div>
            <label>Género:</label>
            <div>
                <label>
                    <input
                        type="radio"
                        value="hombre"
                        name="gender"
                        checked={selectedGender === "hombre"}
                        onChange={handleGenderChange}
                    />
                    Hombre
                </label>
                <label>
                    <input
                        type="radio"
                        value="mujer"
                        name="gender"
                        checked={selectedGender === "mujer"}
                        onChange={handleGenderChange}
                    />
                    Mujer
                </label>
                <label>
                    <input
                        type="radio"
                        value="no_binario"
                        name="gender"
                        checked={selectedGender === "no_binario"}
                        onChange={handleGenderChange}
                    />
                    No binario
                </label>
            </div>
        </div>
    );
}