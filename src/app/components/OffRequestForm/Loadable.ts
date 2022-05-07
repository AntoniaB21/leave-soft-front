/**
 *
 * Asynchronously loads the component for OffRequestForm
 *
 */

import { lazyLoad } from 'utils/loadable';

export const OffRequestForm = lazyLoad(
  () => import('./index'),
  module => module.OffRequestForm,
);
