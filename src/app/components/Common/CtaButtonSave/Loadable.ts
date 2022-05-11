/**
*
* Asynchronously loads the component for CtaButtonSave
*
*/

import { lazyLoad } from 'utils/loadable';

export const CtaButtonSave = lazyLoad(() => import('./index'), module => module.CtaButtonSave);