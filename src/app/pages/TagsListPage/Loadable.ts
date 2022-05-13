/**
 *
 * Asynchronously loads the component for TagsListPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TagsListPage = lazyLoad(
  () => import('./index'),
  module => module.TagsListPage,
);
