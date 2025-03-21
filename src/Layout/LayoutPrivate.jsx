import { useContext } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext"; // ✅ Asegúrate de importar correctamente
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const LayoutPrivate = () => {
  const { user } = useContext(UserContext); // ✅ Aquí pasas el contexto correcto
  const navigate = useNavigate();

  return user ? (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default LayoutPrivate;
