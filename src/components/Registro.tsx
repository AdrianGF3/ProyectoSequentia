import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, analytics } from "../firebaseConfig";
import { logEvent } from "firebase/analytics";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
  const [wantsPromos, setWantsPromos] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!acceptedTerms) {
      setError("Debes aceptar las condiciones para continuar.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setLoading(true);

    try {
      // Firebase lanza error si el correo ya existe
      await createUserWithEmailAndPassword(auth, email, password);

      logEvent(analytics, "sign_up", { method: "Email", wantsPromos });

      // Redirige para completar el perfil
      navigate("/personal-info");
    } catch (err: any) {
      if (err.code) {
        switch (err.code) {
          case "auth/email-already-in-use":
            setError("El correo ya está registrado.");
            break;
          case "auth/invalid-email":
            setError("El correo no es válido.");
            break;
          case "auth/weak-password":
            setError("La contraseña es demasiado débil (mínimo 6 caracteres).");
            break;
          case "auth/too-many-requests":
            setError("Demasiados intentos. Intenta de nuevo más tarde.");
            break;
          case "auth/operation-not-allowed":
            setError("El registro con correo no está habilitado.");
            break;
          default:
            setError("Error al registrar usuario. Intenta más tarde.");
        }
      } else {
        setError("Error inesperado. Intenta más tarde.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dark:text-black dark:bg-gray-200 bg-[url(/img/backgroundFigma.png)] bg-cover bg-center backdrop-blur-md flex justify-center items-center min-h-screen w-full">
      <div className="bg-white rounded-xl p-8 flex flex-col items-center w-[400px] max-w-full">
        <img src="img/logo-sequentia.png" alt="Logo Sequentia" className="mb-12 w-[300px]" />
        <h2 className="text-2xl font-extrabold text-center text-[#104A67] mb-6">Crear cuenta</h2>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <form onSubmit={handleRegister} className="flex flex-col items-center w-full">
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mb-4 px-4 py-2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mb-4 px-4 py-2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Repetir contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full mb-6 px-4 py-2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-start mb-4 w-full text-[#104A67] gap-2">
            <input
              type="checkbox"
              checked={acceptedTerms}
              onChange={() => setAcceptedTerms(!acceptedTerms)}
              className="mt-1"
              required
            />
            <span className="leading-snug text-gray-400 font-semibold">
              He leído y acepto las{" "}
              <Link to="/terms" className="text-[#104A67] no-underline">
                condiciones generales de contratación
              </Link>{" "}
              y la{" "}
              <Link to="/privacy" className="text-[#104A67] no-underline">
                política de privacidad
              </Link>.
            </span>
          </div>

          <label className="flex items-center mb-6 w-full text-gray-400 font-semibold">
            <input
              type="checkbox"
              checked={wantsPromos}
              onChange={() => setWantsPromos(!wantsPromos)}
              className="mr-2"
            />
            Quiero recibir novedades y promociones de Sequentia.
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`font-semibold text-lg py-3 px-20 text-[#104A67] rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#E9D04A] hover:bg-blue-700"
            }`}
          >
            {loading ? "Registrando..." : "Siguiente"}
          </button>
        </form>

        <div className="mt-6 text-center font-semibold text-gray-400">
          <p>
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-[#104A67] no-underline">
              Inicia sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
