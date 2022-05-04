
import { GlobalState } from 'app//slice/types';
import { LoginPageState } from 'app/pages/LoginPage/slice/types';
import { TakeOffRequestPageState } from 'app/pages/TakeOffRequestPage/slice/types';
import { LoginUserPageState } from 'app/pages/LoginUserPage/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  global: GlobalState;
  LoginPage?: LoginPageState;
  takeOffRequestPage?: TakeOffRequestPageState;
  loginUserPage?: LoginUserPageState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}