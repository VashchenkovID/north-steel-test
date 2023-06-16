import React from "react";

import { Route, Routes } from "react-router-dom";
import { IRouteItem } from "../../api/models/RouteItem/RouteItem";
import { PublicRoutesEnum } from "../../utils/enums";
import RequestPage from "../../pages/RequestPage/RequestPage";
import StartPage from "../../pages/StartPage/StartPage";

export const PublicRoutes: Array<IRouteItem> = [
  { path: PublicRoutesEnum.GENERAL, element: <StartPage /> },
  { path: `${PublicRoutesEnum.REQUEST}/:type`, element: <RequestPage /> },
];

const AppRouter: React.FC = () => {
  return (
    <>
      <Routes>
        {PublicRoutes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Routes>
    </>
  );
};

export default AppRouter;
