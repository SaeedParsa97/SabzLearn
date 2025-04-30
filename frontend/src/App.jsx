import { useRoutes } from "react-router-dom";
import routes from "./routes";
import AuthContext from "./context/authCpontext";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [userInfos, setUserInfos] = useState(null);

  const router = useRoutes(routes);

  const login = useCallback((userInfos, token) => {
    setIsLoggedIn(true);
    setToken(token);
    setUserInfos(userInfos);
    localStorage.setItem("user", JSON.stringify({ token: token }));
  },[]);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setToken(null);
    setUserInfos({});
    localStorage.removeItem("user");
  },[]);

  useEffect(() => {

    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch(`http://localhost:4000/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorageData.token}`,
        },
      })
        .then((response) => response.json())
        .then((userData) => {
          setIsLoggedIn(true);
          setUserInfos(userData);
        });
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        userInfos,
        login,
        logout,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}

export default App;
