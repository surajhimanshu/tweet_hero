import HomePage from "./Pages/HomePage";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Signupform from "./features/Signup/Signupform";

const App = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (!isAuth) {
      if (location.pathname !== "/login") {
        if (location.pathname !== "/signupform") navigate("/signup");
      }
    } else {
      if (location.pathname === "/home" || location.pathname === "/login") {
        navigate("/home");
      }
    }
  }, [isAuth, location.pathname, navigate]);

  return (
    <>
      <Routes>
        {isAuth ? (
          <>
            <Route path="/*" element={<HomePage />} />
            {/** Private Routes */}
          </>
        ) : (
          <>
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signupform" element={<Signupform />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<SignupPage />} />
            {/* Open Routes */}
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
