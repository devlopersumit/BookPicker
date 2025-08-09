import Navbar from "./Navbar";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-2">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
