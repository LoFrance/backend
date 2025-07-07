import { defineConfig } from '../defineConfig';
export function createLocalConfig() {
  console.log('create local config');
  return defineConfig({
    basePath: process.env.BASE_PATH ?? 'http://localhost:4000',
    email: process.env.EMAIL ?? '',
    etherealUser: process.env.ETHEREAL_USER ?? '',
    etherealPassword: process.env.ETHEREAL_PASSWORD ?? '',
  });
}
