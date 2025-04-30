import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>Meu Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Meu Footer</footer>
    </div>
  );
};

export default Layout;
