import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { CategoryPage, CategoryDetailPage } from "../pages";

function CategoryRoute() {
  let match = useRouteMatch();
  return (
    <Router>
      <h1>Manage Category</h1>
      <Switch>
        <Route path={`${match.path}/:categoryId`}>
          <CategoryDetailPage />
        </Route>
        <Route path={match.path} exact>
          <CategoryPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default CategoryRoute;
