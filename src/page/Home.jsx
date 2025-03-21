import React from "react";
import { useUserContext } from "../util/useUserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(true);
    navigate("/dashboard");
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-sky-950 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/foto-gratis/gente-negocios-trabajando-equipo-oficina_1303-22863.jpg?t=st=1742592412~exp=1742596012~hmac=4cbd31b0bd1ba7773902aeffd9e949b2c1a3ca295835aab71c3a745a2da725b0&w=1380)",
      }}
    >
      <div className="w-full max-w-sm bg-gray-800 bg-opacity-90 backdrop-blur-lg rounded-xl shadow-lg p-8">
        <h2 className="text-white text-2xl font-semibold text-center mb-3">
          Sign In
        </h2>
        <p className="text-sm text-gray-300 text-center mb-6">
          Coloca cualquier información en los campos y presiona “Iniciar sesión”
          para acceder al sistema.
        </p>
        <form className="space-y-5" onSubmit={handleLogin}>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2H2V5zm0 4h16v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9zm4 3a2 2 0 104 0 2 2 0 00-4 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Usuario corporativo"
              className="block w-full pl-10 pr-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 8V6a6 6 0 1112 0v2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2zm6 6a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </span>
            <input
              type="password"
              placeholder="Contraseña"
              className="block w-full pl-10 pr-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-200 shadow-sm"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
