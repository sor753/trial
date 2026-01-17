import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <p className="font-bold">Solution</p>
      <Outlet />
    </div>
  );
};

export default Layout;
