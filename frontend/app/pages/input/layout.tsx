import { Outlet } from 'react-router';
import type { Route } from './+types/page';
import { useEffect, useState } from 'react';
import { Configuration, FamilyApi, type Family } from '~/interface';

// export const clientLoader = async () => {
// await new Promise((resolve) => setTimeout(resolve, 1000));
// const response = await fetch('http://localhost:3000/families');
// if (!response.ok) {
//   throw new Error('response error');
// }
// const data = await response.json();
//   return data;
// };

const conf = new Configuration({
  basePath: 'http://localhost:3000',
});
const familyApi = new FamilyApi(conf);

const Layout = ({}: Route.ComponentProps) => {
  const [families, setFamilies] = useState<Family[]>();

  useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await familyApi.familiesGet({});
      // const response = await fetch('http://localhost:3000/families');
      // if (!response.ok) {
      //   throw new Error('response error');
      // }
      // const data = await response.json();
      console.log(response);
      setFamilies(response);
    })();
  }, []);

  return (
    <div>
      <p className="font-bold">Input</p>
      {families && (
        <ul>
          {families.map((family) => (
            <li key={family.reference}>
              <p className="font-bold">{family.name}</p>
              <p>{family.relationship}</p>
              <p>{family.birthDate.toString()}</p>
              <p>{family.job.name}</p>
              {family.have.map((have) => (
                <div key={have.reference}>
                  <p>{have.name}</p>
                </div>
              ))}
            </li>
          ))}
        </ul>
      )}
      <Outlet />
    </div>
  );
};

export default Layout;
