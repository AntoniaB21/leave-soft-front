/**
 *
 * Asynchronously loads the component for OffRequestAdd
 *
 */

import { lazyLoad } from 'utils/loadable';

export const OffRequestAdd = lazyLoad(
  () => import('./index'),
  module => module.OffRequestAdd,
);
