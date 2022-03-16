import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./contex/index";
import { privetRoutes, publicRoutes } from "./router/Routes";


const AppRouter = () => {

    const {isAuth} = useContext(AuthContext);
    return (
        isAuth
        ?
        <Routes>
            {privetRoutes.map( (route, index) =>
                <Route key={index}
                       path={route.path}
                       element={route.component}
                       exact={route.exact}>
                </Route>
            )}
        </Routes>
        :
        <Routes>
            {publicRoutes.map( (route, index) =>
                <Route key={index}
                        path={route.path}
                        element={route.component}
                        exact={route.exact}>
                </Route>
            )}
        </Routes>
    );
};

export default AppRouter;
