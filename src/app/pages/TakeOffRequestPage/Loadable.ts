/**
 *
 * Asynchronously loads the component for TakeOffRequestPage
 *
 */

import { lazyLoad } from "utils/loadable";

export const TakeOffRequestPage = lazyLoad(
  () => import("./index"),
  (module) => module.TakeOffRequestPage
);
