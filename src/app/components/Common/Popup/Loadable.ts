/**
 *
 * Asynchronously loads the component for Popup
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Popup = lazyLoad(
  () => import('./index'),
  module => module.Popup,
);
