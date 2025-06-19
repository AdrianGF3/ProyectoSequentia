import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth, analytics } from "../firebaseConfig";
import { logEvent } from "firebase/analytics";
import { useTranslation } from 'react-i18next';

const Recovery: React.FC = () => {  
    const { t } = useTranslation();
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
            setError(t('login.09'));
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email); //esto sirve para que firebase envie el email para recuperar contraseña si el correo está registrado en la bbdd.
            logEvent(analytics, "password_reset_request", { method: "Email" });

            setMessage(t('login.10'));
        } catch (err) {
            setError((err as Error).message);
        }
    };

    return (
        <div className="dark:text-black dark:bg-gray-200 bg-[url(/img/backgroundFigma.png)] bg-cover bg-center backdrop-blur-md flex justify-center items-center min-h-screen w-full">
            <div className="bg-white rounded-xl p-8 flex flex-col items-center">
                <img src="img/logo-sequentia.png" alt="Logo" className="mb-12 w-[300px]" />
                <h2 className="text-2xl font-extrabold text-center text-gray-700 text-[#104A67] mb-6">{t('login.08')}</h2>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {message && <p style={{ color: "green" }}>{message}</p>}

                <form onSubmit={handlePasswordReset}>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder={t('login.02')}
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
                            {t('login.08')}
                        </button>
                    </div>
                </form>

                <div className="mt-4 text-center flex items-center font-semibold">
                    <p className="text-[#104A67] ml-2">{t('login.11')}</p>

                </div>
                <div className="">
                    <p className="text-gray-400 mt-8">{t('login.12')}</p>
                </div>
            </div>
        </div>
    );
};

export default Recovery;
