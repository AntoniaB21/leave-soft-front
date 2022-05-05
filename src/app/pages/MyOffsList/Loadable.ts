/**
 *
 * Asynchronously loads the component for MyOffsList
 *
 */

import { lazyLoad } from 'utils/loadable';

export const MyOffsList = lazyLoad(
  () => import('./index'),
  module => module.MyOffsList,
);
