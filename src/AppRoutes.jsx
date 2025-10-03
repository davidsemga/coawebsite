import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Landing";
import Home from "./Home";
import OfficialList from "./OfficialList";
import PageWrapper from "./PageWrapper";

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <PageWrapper locationKey={location.pathname}>
            <Landing />
          </PageWrapper>
        }
      />
      <Route
        path="/home"
        element={
          <PageWrapper locationKey={location.pathname}>
            <Home />
          </PageWrapper>
        }
      />
      <Route
        path="/officials"
        element={
          <PageWrapper locationKey={location.pathname}>
            <OfficialList />
          </PageWrapper>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
