/**
 *
 * Asynchronously loads the component for ValidationListPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ValidationListPage = lazyLoad(
  () => import('./index'),
  module => module.ValidationListPage,
);
