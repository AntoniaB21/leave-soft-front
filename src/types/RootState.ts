
import { GlobalState } from 'app//slice/types';
import { LoginPageState } from 'app/pages/LoginPage/slice/types';
import { LoginUserPageState } from 'app/pages/LoginUserPage/slice/types';
import { ProfilePageState } from 'app/pages/ProfilePage/slice/types';
import { OffRequestAddState } from 'app/pages/OffRequestAdd/slice/types';
import { MyOffsListState } from 'app/pages/MyOffsList/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
  myOffsList: import("/home/antonia/Documents/ETUDES/leave-soft-front/src/app/pages/MyOffsList/slice/types").MyOffsListState;
export interface RootState {
  global: GlobalState;
  LoginPage?: LoginPageState;
  loginUserPage?: LoginUserPageState;
  profilePage?: ProfilePageState;
  offRequestAdd?: OffRequestAddState;
  myOffsList?: MyOffsListState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}