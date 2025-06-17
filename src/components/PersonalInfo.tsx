import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

const PersonalInfo: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [phonePrefix, setPhonePrefix] = useState("+34");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [country, setCountry] = useState("");
    const [province, setProvince] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        // Validación básica de campos obligatorios
        if (
            !firstName.trim() ||
            !lastName.trim() ||
            !username.trim() ||
            !phonePrefix.trim() ||
            !phoneNumber.trim() ||
            !country.trim() ||
            !province.trim() ||
            !city.trim() ||
            !postalCode.trim()
        ) {
            setError("Por favor, completa todos los campos antes de continuar.");
            return;
        }

        try {
            const user = auth.currentUser;

            // Debug: verificar si el usuario está autenticado
            if (!user) {
                setError("Usuario no autenticado.");
                console.error("auth.currentUser es null. El usuario no está logueado.");
                return;
            }

            console.log("Usuario autenticado:", user);

            // Construir objeto solo con campos no vacíos
            const userData: { [key: string]: any } = {
                email: user.email || null,
                createdAt: new Date(),
            };

            if (firstName.trim()) userData.name = firstName.trim();
            if (lastName.trim()) userData.surname = lastName.trim();
            if (username.trim()) userData.username = username.trim();
            if (phonePrefix.trim() && phoneNumber.trim()) userData.phone = phonePrefix.trim() + phoneNumber.trim();
            if (country.trim()) userData.country = country.trim();
            if (province.trim()) userData.province = province.trim();
            if (city.trim()) userData.city = city.trim();
            if (postalCode.trim()) userData.postalCode = postalCode.trim();
            // Campos opcionales (añádelos si los usas)
            // if (sexo && sexo.trim()) userData.sexo = sexo.trim();
            // if (profilePicUrl && profilePicUrl.trim()) userData.profilePicUrl = profilePicUrl.trim();

            console.log("Datos que se van a guardar en Firestore:", userData);

            await setDoc(doc(db, "user", user.uid), userData);

            alert("Cuenta completada con éxito.");
            navigate("/dashboard");
        } catch (err: any) {
            console.error("Error al guardar los datos en Firestore:", err);
            setError(`Error al guardar los datos: ${err.message || err}`);
        }
    };


    return (
        <div className="dark:text-black dark:bg-gray-200 bg-[url(/img/backgroundFigma.png)] bg-cover bg-center backdrop-blur-md flex justify-center items-center min-h-screen w-full">
            <div className="bg-white rounded-xl p-8 flex flex-col items-center w-[400px] max-w-full">
                <h2 className="text-2xl font-extrabold text-center text-[#104A67] mb-6">
                    Casi hemos terminado
                </h2>
                <h3 className="text-xl font-semibold text-center text-gray-600 mb-4">
                    Datos personales
                </h3>

                {error && <p className="text-red-600 mb-4">{error}</p>}

                <form onSubmit={handleSubmit} className="flex flex-col w-full">
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mb-3 px-4 py-2 border rounded-xl border-gray-300"
                    />
                    <input
                        type="text"
                        placeholder="Apellido"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mb-3 px-4 py-2 border rounded-xl border-gray-300"
                    />
                    <input
                        type="text"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mb-3 px-4 py-2 border rounded-xl border-gray-300"
                    />
                    <div className="flex gap-2 mb-3">
                        <input
                            type="text"
                            placeholder="+34"
                            value={phonePrefix}
                            onChange={(e) => setPhonePrefix(e.target.value)}
                            className="w-[80px] px-4 py-2 border rounded-xl border-gray-300"
                        />
                        <input
                            type="tel"
                            placeholder="Número de teléfono"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="flex-1 px-4 py-2 border rounded-xl border-gray-300"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="País"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="mb-3 px-4 py-2 border rounded-xl border-gray-300"
                    />
                    <input
                        type="text"
                        placeholder="Provincia"
                        value={province}
                        onChange={(e) => setProvince(e.target.value)}
                        className="mb-3 px-4 py-2 border rounded-xl border-gray-300"
                    />
                    <input
                        type="text"
                        placeholder="Ciudad"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="mb-3 px-4 py-2 border rounded-xl border-gray-300"
                    />
                    <input
                        type="text"
                        placeholder="Código Postal"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="mb-6 px-4 py-2 border rounded-xl border-gray-300"
                    />

                    <button
                        type="submit"
                        className="font-semibold text-lg py-3 px-10 bg-[#E9D04A] text-[#104A67] hover:bg-blue-700 focus:outline-none focus:ring-2 rounded-xl focus:ring-blue-500 self-end"
                    >
                        Crear cuenta
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PersonalInfo;
