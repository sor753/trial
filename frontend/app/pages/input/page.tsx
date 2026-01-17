import { useOutletContext, useSearchParams } from 'react-router';
import type { Route } from '../+types/layout';
import FamilyInput from './tabs/family/famlyInput';
import type { Family, Income } from '~/interface';

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: '実験的入力' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
};

const Page = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [families, _incomes, isLoading] =
    useOutletContext<[Family[] | undefined, Income[] | undefined, boolean]>();

  const handleClickStep = (step: 'family' | 'income') => {
    setSearchParams({ step });
  };

  return (
    <div>
      <div>
        <p>ステップ</p>
        <ul>
          <li
            className="cursor-pointer"
            onClick={() => handleClickStep('family')}
          >
            1
          </li>
          <li
            className="cursor-pointer"
            onClick={() => handleClickStep('income')}
          >
            2
          </li>
        </ul>
      </div>
      <div>
        {(!searchParams.get('step') ||
          searchParams.get('step') === 'family') && (
          <>
            {isLoading ? (
              <div>isLoading</div>
            ) : (
              families && <FamilyInput families={families} />
            )}
          </>
        )}
        {searchParams.get('step') === 'income' && <div>Income Input Page</div>}
      </div>
    </div>
  );
};

export default Page;
