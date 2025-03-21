import { Outlet } from "react-router-dom";

const LayoutRoot = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800">
      <Outlet />


    </div>
  );
};

export default LayoutRoot;
