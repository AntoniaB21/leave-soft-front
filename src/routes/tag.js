import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/tag/";

export default [
  <Route path="/tags/create" component={Create} exact key="create" />,
  <Route path="/tags/edit/:id" component={Update} exact key="update" />,
  <Route path="/tags/show/:id" component={Show} exact key="show" />,
  <Route path="/tags/" component={List} exact strict key="list" />,
  <Route path="/tags/:page" component={List} exact strict key="page" />,
];
