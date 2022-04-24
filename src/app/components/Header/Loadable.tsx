/**
 * Asynchronously loads the component for HomePage
 */

 import { lazyLoad } from "utils/loadable";

 export const Logo = lazyLoad(
   () => import("./index"),
   (module) => module.CustomHeader
 );
 