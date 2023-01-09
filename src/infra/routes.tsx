import { Route, Routes } from "react-router-dom";
import { Home } from "../app/Home";
import { Login } from "../app/Login";
import { Pomodoro } from "../app/Pomodoro";
import { CyclesContextProvider } from "../contexts/CyclesContext";
import { DefaultLayout } from "../shared/layouts/DefaultLayout";
import { URLS } from "./URLS";

export function Router() {
  return (
    <Routes>
      <Route path={URLS.LOGIN} element={<Login />} />

      <Route path="/" element={<DefaultLayout />}>
        <Route path={URLS.HOME} element={<Home />} />
        <Route path={URLS.POMODORO} element={
          <CyclesContextProvider>
            <Pomodoro />
          </CyclesContextProvider>
        } />
        <Route path={URLS.DOCUMENT} element={<h1>Documents</h1>} />
        <Route path={URLS.FINANCE} element={<h1>Finance</h1>} />
        <Route path={URLS.USERS} element={<h1>Users</h1>} />
        <Route path={URLS.SETTING} element={<h1>Settings</h1>} />
      </Route>
    </Routes>
  );
}