import { Outlet } from 'react-router';
import type { Route } from './+types/page';
import { useEffect, useState } from 'react';
import {
  Configuration,
  FamilyApi,
  IncomeApi,
  type Family,
  type Income,
} from '~/interface';
import { apiConf } from '~/root';

// export const clientLoader = async () => {
// await new Promise((resolve) => setTimeout(resolve, 1000));
// const response = await fetch('http://localhost:3000/families');
// if (!response.ok) {
//   throw new Error('response error');
// }
// const data = await response.json();
//   return data;
// };

const familyApi = new FamilyApi(apiConf);
const incomeApi = new IncomeApi(apiConf);

const Layout = ({}: Route.ComponentProps) => {
  const [families, setFamilies] = useState<Family[]>();
  const [incomes, setIncomes] = useState<Income[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const familyResponse = await familyApi.familiesGet();
      const incomeResponse = await incomeApi.incomesGet();
      setFamilies(familyResponse);
      setIncomes(incomeResponse);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      <Outlet context={[families, incomes, isLoading]} />
    </div>
  );
};

export default Layout;
