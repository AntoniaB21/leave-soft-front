
import { GlobalState } from 'app//slice/types';
import { WebsitesPageState } from 'app/pages/TagLists/slice/types';
import { LoginPageState } from 'app/pages/LoginPage/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  global: GlobalState;
  websitesPage?: WebsitesPageState;
  LoginPage?: LoginPageState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}