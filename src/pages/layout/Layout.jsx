import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
      <Link />
    </>
  );
};

export default Layout;
