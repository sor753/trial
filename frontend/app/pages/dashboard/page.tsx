import { NavLink } from 'react-router';
import type { Route } from '../+types/layout';

export const meta = ({}: Route.MetaArgs) => {
  return [
    { title: '実験的アプリ' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
};

const Page = ({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) => {
  return (
    <div>
      Dashboard Page
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>
      <NavLink to="/input">Input</NavLink>
      <br />
      <NavLink to="/solution">Solution</NavLink>
      <br />
    </div>
  );
};

export default Page;
