/**
 *
 * Asynchronously loads the component for SaveButton
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SaveButton = lazyLoad(
  () => import('./index'),
  module => module.SaveButton,
);
