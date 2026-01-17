import { Outlet } from 'react-router';
import type { Route } from './+types/page';
import { useEffect } from 'react';

// export const clientLoader = async () => {
// await new Promise((resolve) => setTimeout(resolve, 1000));
// const response = await fetch('http://localhost:3000/families');
// if (!response.ok) {
//   throw new Error('response error');
// }
// const data = await response.json();
//   return data;
// };

const Layout = ({}: Route.ComponentProps) => {
  useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch('http://localhost:3000/families');
      if (!response.ok) {
        throw new Error('response error');
      }
      const data = await response.json();
      console.log('data', data);
    })();
  }, []);

  return (
    <div>
      <p className="font-bold">Input</p>
      <Outlet />
    </div>
  );
};

export default Layout;
