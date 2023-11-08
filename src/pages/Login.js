import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../components/store/auth-context";
import { useNavigate } from "react-router-dom";

import LoginForm from "../components/meetups/LoginForm";
//import classes from "./pages.module.css";

function Login() {
  const navigate = useNavigate();
  const [loadedUsers, setLoadedUsers] = useState([]);
  const { authenticate } = useContext(AuthContext); // Access the authenticate function from the AuthContext

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://test-backend-react-test-default-rtdb.firebaseio.com/users.json"
      );
      const users = await response.json();
      setLoadedUsers(users);
    }

    fetchData();
  }, []);

  function loginHandler(loginData) {
    for (const i in loadedUsers) {
      const tempUser = loadedUsers[i].mail;
      const tempPass = loadedUsers[i].password;
      const tempRole = loadedUsers[i].role;

      if (tempUser === loginData.mail && tempPass === loginData.password) {
        console.log("User found");
        authenticate(tempRole, tempUser);
        if (tempRole === "nurse") {
          navigate("/", { replace: true });
        }
        if (tempRole === "patient") {
          navigate("/patient", { replace: true });
        }
        break;
      }
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <LoginForm onLogin={loginHandler} />
    </section>
  );
}

export default Login;
