import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth, analytics } from "../firebaseConfig";
import { logEvent } from "firebase/analytics";

const Recovery: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handlePasswordReset = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        setMessage(null);

        const validateEmail = (email: string) => 
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!validateEmail(email)) {
            setError("Por favor, ingresa un correo válido.");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email); //esto sirve para que firebase envie el email para recuperar contraseña si el correo está registrado en la bbdd.
            logEvent(analytics, "password_reset_request", { method: "Email" });

            setMessage("Se ha enviado un correo para restablecer tu contraseña.");
        } catch (err) {
            setError((err as Error).message);
        }
    };

    return (
        <div className="dark:text-black dark:bg-gray-200 bg-[url(/img/backgroundFigma.png)] bg-cover bg-center backdrop-blur-md flex justify-center items-center min-h-screen w-full">
            <div className="bg-white rounded-xl p-8 flex flex-col items-center">
                <img src="img/logo-sequentia.png" alt="Logo" className="mb-12 w-[300px]" />
                <h2 className="text-2xl font-extrabold text-center text-gray-700 text-[#104A67] mb-6">Recuperar Contraseña</h2>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {message && <p style={{ color: "green" }}>{message}</p>}

                <form onSubmit={handlePasswordReset}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Ingresa tu correo"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-[350px] mt-2 px-4 py-2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-center items-center">
                        <button
                            type="submit"
                            className="mb-6 mt-6 font-semibold text-lg py-3 px-10 bg-[#E9D04A] text-[#104A67] hover:bg-blue-700 focus:outline-none 
              focus:ring-2 rounded-xl focus:ring-blue-500"
                        >
                            Recuperar contraseña
                        </button>
                    </div>
                </form>

                <div className="mt-4 text-center flex items-center font-semibold">
                    <p className="text-[#104A67] ml-2">¿No recibes ningun email?</p>

                </div>
                <div className="">
                    <p className="text-gray-400 mt-8">Comprueba tu carpeta de SPAM de tu email o contacta</p>
                    <p className="text-gray-400"> con nosotros en info@sequentia.app</p>
                </div>
            </div>
        </div>
    );
};

export default Recovery;
