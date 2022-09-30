import React, { useState } from "react";
import Cait from "../assets/cait-logo.png";
import { AiOutlineUser, AiOutlineKey } from "react-icons/ai";
import credentials from "../dummyUsers";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState(true);
  const [alert, setAlert] = useState(false);
  const [alertText, setAlertText] = useState("");

  const setCredentials = (username, password) => {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  };

  const registerUser = () => {
    credentials.push({ username: username, email: email, password: password });
    setCredentials(username, password);
    return navigate("/");
  };
  const handleSubmit = () => {
    console.log(username, password);
    const loginUser = credentials.find((user) => user.username === username);

    console.log(loginUser);
    if (!loginUser) {
      setAlert(true);
      setAlertText("User not Found!!");
      setTimeout(() => {
        setAlert(false);
        setAlertText("");
      }, 2000);
      return;
    }

    const user = loginUser.username;
    const pass = loginUser.password;

    console.log(user, pass);
    if (user && pass !== password) {
      setAlert(true);
      setAlertText("Wrong Credentials");
      setTimeout(() => {
        setAlert(false);
        setAlertText("");
      }, 2000);
      return;
    }
    if (user && pass) {
      setCredentials(user, pass);
      return navigate("/");
    }
  };
  return (
    <main>
      <div className="login-master">
        <div className="orange-image">
          <img src={Cait} alt="" />
        </div>
        <h1>{login ? "Register" : "Login"}</h1>
        <div className="admin-details">
          <p>
            <b>For Login-</b>
          </p>
          <p>Username: Admin</p>
          <p>Password: admin123</p>
        </div>
        {alert && (
          <div className="alert-div">
            <p>{alertText}</p>
          </div>
        )}

        <div className="form">
          <div className="input">
            <div className="username-header">
              <AiOutlineUser />
              <p>Username</p>
            </div>
            <input
              value={username}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={login ? "input" : "hidden"}>
            <div className="username-header">
              <AiOutlineUser />
              <p>Email</p>
            </div>
            <input
              value={email}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <div className="password-header">
              <AiOutlineKey />
              <p>Password</p>
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="submit-btn">
            <button
              onClick={login ? () => registerUser() : () => handleSubmit()}
            >
              {login ? "Register" : "Login"}
            </button>
          </div>
          <p className="login-register">
            {login ? "Already a Member?  " : "New here ?"}
            <button className="register-btn" onClick={() => setLogin(!login)}>
              {login ? "Login" : "Register"}
            </button>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
