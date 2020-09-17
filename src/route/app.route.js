import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { CategoryPage, CategoryDetailPage, UserPage } from "../pages";
import CategoryRoute from "./category.route";
function AppRoute() {
  return (
    <Router>
      <Switch>
        <Route path="/category">
          <CategoryRoute />
        </Route>
        <Route path="/user">
          <UserPage />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <Link to='/category'>
      <p>go to Category</p>
    </Link>
  </div>
);

export default AppRoute;
