import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <p className="font-bold">Dashboard</p>
      <Outlet />
    </div>
  );
};

export default Layout;
