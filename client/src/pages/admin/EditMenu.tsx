import Sidebar from "../../components/admin/layouts/Sidebar";
import { Navbar } from "../../components/admin/layouts/Navbar";
import { MenuForm } from "../../components/admin/forms/MenuForm";

export const EditMenu = () => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <MenuForm />
      </div>
    </>
  );
};
