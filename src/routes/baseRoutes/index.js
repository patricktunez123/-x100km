import React, { Fragment, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Spin } from "antd";
import { routes } from "../../config/route-config";
import Error404 from "../../views/Error404";

const HomePage = React.lazy(() => import("../../views/homePage"));

const Routes = () => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div
            style={{
              height: "70vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spin />
          </div>
        }
      >
        <Switch>
          <Route path={routes.home.url} exact>
            <HomePage />
          </Route>

          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default Routes;
