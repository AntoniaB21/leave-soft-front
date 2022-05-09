/**
 *
 * Asynchronously loads the component for LoginUserPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const LoginUserPage = lazyLoad(
  () => import('./index'),
  module => module.LoginUserPage,
);
