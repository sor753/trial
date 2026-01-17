import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <p className="font-bold">Input</p>
      <Outlet />
    </div>
  );
};

export default Layout;
