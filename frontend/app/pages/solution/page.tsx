import type { Route } from '../+types/layout';

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: '実験的解決' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
};

const Page = () => {
  return <div>Solution Page</div>;
};

export default Page;
