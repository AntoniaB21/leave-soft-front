/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from "react";
import { Helmet } from "react-helmet-async";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "styles/global-styles";

import { HomePage } from "./pages/HomePage/Loadable";
import { NotFoundPage } from "./components/NotFoundPage/Loadable";
import { useTranslation } from "react-i18next";
import { LoginPage } from "./pages/LoginPage/Loadable";
import ProtectedRoute from "./components/ProtectedRoutes";
import { Home } from "tabler-icons-react";
import { useGlobalSlice } from "./slice";
import { useDispatch } from "react-redux";
import { ProfilePage } from "./pages/ProfilePage";
import { OffRequestAdd } from "./pages/OffRequestAdd/Loadable";
import { MyOffsList } from "./pages/MyOffsList";
import { UsersListPage } from "./pages/UsersListPage";
import { AddUserPage } from "./pages/AddUserPage";
import { TagsListPage } from "./pages/TagsListPage";
import { AddTagPage } from "./pages/AddTagPage";
import { ValidationListPage } from "./pages/ValidationListPage";
import { AddTagChildPage } from "./pages/AddTagChildPage";
import { UpdateTagPage } from "./pages/UpdateTagPage";


export function App() {
  const { actions } = useGlobalSlice();
  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    React.useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    dispatch(actions.getCurrentUser());
  });

  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%Off PlannerFront-end"
        defaultTitle="Off Planner"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Off Planner Application" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/profile/:id" component={ProfilePage} />
        <ProtectedRoute exact path="/prendre-un-off/" component={OffRequestAdd} />
        <ProtectedRoute exact path="/mes-offs/" component={MyOffsList} />
        <ProtectedRoute exact path="/users/" component={UsersListPage} />
        <ProtectedRoute exact path="/add-user/" component={AddUserPage} />
        <ProtectedRoute exact path="/tags" component={TagsListPage} />
        <ProtectedRoute exact path="/add-tag" component={AddTagPage} />
        <ProtectedRoute exact path="/validation-conges" component={ValidationListPage} />
        <ProtectedRoute exact path="/api/tags/:id/addItem" component={AddTagChildPage} />
        <ProtectedRoute exact path="/tags/:slug/edit" component={UpdateTagPage}/>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
