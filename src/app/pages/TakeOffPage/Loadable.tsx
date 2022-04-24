/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from "utils/loadable";

export const TakeOffPage = lazyLoad(
  () => import("./index"),
  (module) => module.LoginPage
);
