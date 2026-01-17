import { Outlet } from 'react-router';
import type { Route } from './+types/page';

export const clientLoader = async () => {
  // Your loader logic here
  return 'Layout';
};

const Layout = ({ loaderData }: Route.ComponentProps) => {
  console.log(loaderData);

  return (
    <div>
      <p className="font-bold">Input</p>
      <Outlet />
    </div>
  );
};

export default Layout;
