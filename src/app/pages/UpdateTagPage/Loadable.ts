/**
 *
 * Asynchronously loads the component for UpdateTagPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const UpdateTagPage = lazyLoad(
  () => import('./index'),
  module => module.UpdateTagPage,
);
