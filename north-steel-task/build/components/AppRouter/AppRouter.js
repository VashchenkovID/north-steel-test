import React from "react";
import { Route, Routes } from "react-router-dom";
import { PublicRoutesEnum } from "../../utils/enums";
import RequestPage from "../../pages/RequestPage/RequestPage";
import StartPage from "../../pages/StartPage/StartPage";
export const PublicRoutes = [
    { path: PublicRoutesEnum.GENERAL, element: React.createElement(StartPage, null) },
    { path: `${PublicRoutesEnum.REQUEST}/:type`, element: React.createElement(RequestPage, null) },
];
const AppRouter = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Routes, null,
            PublicRoutes.map((route) => (React.createElement(Route, { path: route.path, element: route.element, key: route.path }))),
            React.createElement(Route, { path: "*", element: React.createElement("div", null, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430") }))));
};
export default AppRouter;
//# sourceMappingURL=AppRouter.js.map