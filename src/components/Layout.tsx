import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div>
        <NavBar />
      <main>
        <Outlet />
      </main>
      <footer>Meu Footer</footer>
    </div>
  );
};

export default Layout;
