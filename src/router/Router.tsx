import { VFC } from "react";
import { Route, Switch } from "react-router";
import { Page404 } from "../components/pages/404";
import { Login } from "../components/pages/Login";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { homeRoutes } from "./HomeRoutes";

export const Router: VFC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" render={({ match: { url } }) => (
        <Switch>
          {homeRoutes.map((route) => (
            <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
              <HeaderLayout>{route.children}</HeaderLayout>
            </Route>
          ))}
        </Switch>
      )} />
      <Route path="*" component={Page404} />
    </Switch>
  );
};