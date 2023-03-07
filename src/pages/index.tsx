import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Main = lazy(() => import("./main"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Suspense fallback="Загрузка..."><Main /></Suspense>} />
    </Routes>
  );
};