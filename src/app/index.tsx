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
import { TagsListsPage } from "./pages/TagLists/Loadable";
import ProtectedRoute from "./components/ProtectedRoutes";

export function App() {
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
        <ProtectedRoute exact path="/tags" component={TagsListsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
