/**
 *
 * Asynchronously loads the component for AddTagChildPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AddTagChildPage = lazyLoad(
  () => import('./index'),
  module => module.AddTagChildPage,
);
