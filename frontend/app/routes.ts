import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from '@react-router/dev/routes';

export default [
  layout('pages/layout.tsx', [
    layout('pages/dashboard/layout.tsx', [index('pages/dashboard/page.tsx')]),
    ...prefix('input', [
      layout('pages/input/layout.tsx', [index('pages/input/page.tsx')]),
    ]),
    ...prefix('solution', [
      layout('pages/solution/layout.tsx', [index('pages/solution/page.tsx')]),
    ]),
  ]),
] satisfies RouteConfig;
