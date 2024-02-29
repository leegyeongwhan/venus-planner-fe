import MainPage from "@domain/planner/page/MainPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "@domain/auth/page/SignInPage";
import SignInCallbackPage from "@domain/auth/page/SignInCallBackPage";
import { ROUTER_PATH } from "@constant/RouterPath";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTER_PATH.MAIN} element={<MainPage />} />
          <Route path={ROUTER_PATH.AUTH.SIGN_IN} element={<SignInPage />} />
          <Route path={ROUTER_PATH.AUTH.CALLBACK} element={<SignInCallbackPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
