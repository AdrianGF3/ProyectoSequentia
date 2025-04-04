// src/Login.tsx
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, analytics } from "./firebaseConfig"; // Importamos auth y analytics
import { logEvent } from "firebase/analytics"; // Importamos logEvent

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);

      // Registrar evento de login exitoso
      logEvent(analytics, 'login', { method: 'Email' }); // Evento personalizado

      alert("Inicio de sesión exitoso");
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="bg-[url(/img/backgroundFigma.png)] bg-cover bg-center backdrop-blur-md flex justify-center items-center min-h-screen w-full">
      <div className="bg-white rounded-xl p-8 flex flex-col items-center">
        <img src="img/logo-sequentia.png" alt="" className="mb-12 w-[300px]" />
        <h2 className="text-2xl font-extrabold text-center text-gray-700 text-[#104A67] mb-6">Inicio de sesión</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input type="email" placeholder="Correo" onChange={(e) => setEmail(e.target.value)} required
              className="w-[350px] mt-2 px-4 py-2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required
              className="w-[350px] mt-2 px-4 py-2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
        <button type="submit" className="mb-6 font-semibold text-lg py-3 px-10 bg-[#E9D04A] text-[#104A67] hover:bg-blue-700 focus:outline-none 
              focus:ring-2 rounded-xl focus:ring-blue-500">Ingresar</button>

        <div className="mt-4 text-center flex items-center font-semibold">
          <p className="text-gray-400">¿No tienes cuenta?</p>
          <a href="#" className="text-[#104A67] ml-2">Crear una</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
