
import { GlobalState } from 'app//slice/types';
import { LoginPageState } from 'app/pages/LoginPage/slice/types';
import { ProfilePageState } from 'app/pages/ProfilePage/slice/types';
import { OffRequestAddState } from 'app/pages/OffRequestAdd/slice/types';
import { MyOffsListState } from 'app/pages/MyOffsList/slice/types';
import { UsersListPageState } from 'app/pages/UsersListPage/slice/types';
import { AddUserPageState } from 'app/pages/AddUserPage/slice/types';
import { TagsListPageState } from 'app/pages/TagsListPage/slice/types';
import { AddTagState } from 'app/pages/AddTagPage/slice/types';
import { ValidationListState } from 'app/pages/ValidationListPage/slice/types';
import { AddTagChildState } from 'app/pages/AddTagChildPage/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  global: GlobalState;
  LoginPage?: LoginPageState;
  profilePage?: ProfilePageState;
  offRequestAdd?: OffRequestAddState;
  myOffsList?: MyOffsListState;
  usersListPage?: UsersListPageState;
  addUserPage?: AddUserPageState;
  tagsListPage?: TagsListPageState;
  addTag?: AddTagState;
  validationList?: ValidationListState;
  addTagChild?: AddTagChildState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}