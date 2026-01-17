import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: '../interface/open-api.yaml',
  output: 'app/interface',
  client: false,
  plugins: ['@hey-api/typescript'],
});
