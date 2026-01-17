import type { Route } from '../+types/layout';

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: '実験的入力' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
};

export const clientLoader = async () => {
  // Your loader logic here
  return 'Client loader data';
};

const Page = ({ loaderData }: Route.ComponentProps) => {
  console.log(loaderData);

  return <div>Input Page</div>;
};

export default Page;
