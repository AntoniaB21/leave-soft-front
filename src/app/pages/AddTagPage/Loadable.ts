/**
 *
 * Asynchronously loads the component for AddTagPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AddTagPage = lazyLoad(
  () => import('./index'),
  module => module.AddTagPage,
);
