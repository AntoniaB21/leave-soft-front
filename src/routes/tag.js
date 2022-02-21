import React from "react";
import { Route } from "react-router-dom";
import { List, Create, Update, Show } from "../components/tag/";

export default [
  <Route path="/tags/create" element={<Create/>} exact key="create" />,
  <Route path="/tags/edit/:id" element={<Update />} exact key="update" />,
  <Route path="/tags/show/:id" element={<Show id={this.state.match.params.id}/>} exact key="show" />,
  <Route path="/tags/" element={<List />}exact strict key="list" />,
  <Route path="/tags/:page" element={<List />} exact strict key="page" />,
];
