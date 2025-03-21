import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="text-center text-smborder-t border-gray-200 py-6 shadow-inner bg-black">
        <div className="text-gray-600 font-semibold">
          © {new Date().getFullYear()} Grupo Corporativo NovaTech
        </div>
        <div className="text-xs text-gray-500 mt-1 italic">
          Desarrollado con estándares empresariales y enfoque profesional
        </div>
        <div className="text-xs text-gray-400 mt-1">
          contacto@novatech.com | +57 123 456 7890
        </div>
      </footer>
    </div>
  );
};

export default Footer;
