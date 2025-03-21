import React from "react";
import { useUserContext } from "../util/useUserContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { setUser } = useUserContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-10 border border-gray-200">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Panel de Administración
          </h1>
          <p className="text-center text-gray-500 text-lg">
            Bienvenido al sistema de gestión empresarial
          </p>
        </header>

        <section className="text-gray-700 text-base leading-relaxed">
          <p className="mb-6 text-center">
            Desde aquí puedes acceder a los módulos de usuarios, reportes,
            configuraciones y más funcionalidades según tu rol.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
