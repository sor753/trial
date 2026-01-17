import type { Route } from '../+types/layout';

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: '実験的入力' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
};

const Page = () => {
  return <div>Input Page</div>;
};

export default Page;
