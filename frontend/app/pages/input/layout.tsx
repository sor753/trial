import { Outlet } from 'react-router';
import type { Route } from './+types/page';
import { createContext, useEffect, useState } from 'react';
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

export const FamilyInfoContext = createContext<
  | {
      families: Family[] | undefined;
      incomes: Income[] | undefined;
    }
  | undefined
>(undefined);

const Layout = ({}: Route.ComponentProps) => {
  const [families, setFamilies] = useState<Family[]>();
  const [incomes, setIncomes] = useState<Income[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const familyResponse = await familyApi.familiesGet();
      const incomeResponse = await incomeApi.incomesGet();
      setFamilies(familyResponse);
      setIncomes(incomeResponse);
      console.log(incomeResponse);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div>
      {/* {families && (
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
      )} */}
      <FamilyInfoContext.Provider value={{ families, incomes }}>
        <Outlet />
      </FamilyInfoContext.Provider>
    </div>
  );
};

export default Layout;
