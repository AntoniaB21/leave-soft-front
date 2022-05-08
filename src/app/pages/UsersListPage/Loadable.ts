/**
 *
 * Asynchronously loads the component for UsersListPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const UsersListPage = lazyLoad(
  () => import('./index'),
  module => module.UsersListPage,
);
