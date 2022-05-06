/**
 *
 * Asynchronously loads the component for NotificationsPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const NotificationsPage = lazyLoad(
  () => import('./index'),
  module => module.NotificationsPage,
);
