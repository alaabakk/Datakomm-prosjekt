import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";


function LoginForm(props) {
  const navigate = useNavigate();
  const mailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler1(event) {
    event.preventDefault();

    const enteredMail = mailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const loginData = {
      mail: enteredMail,
      password: enteredPassword,
    };
    props.onLogin(loginData);
  }
  function submitHandler2(event) {
    event.preventDefault();
    navigate("/signup", { replace: true });
  } 




  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler1}>
        <div className={classes.control}>
          <label htmlFor="mail">Email address</label>
          <input type="text" required id="mail" ref={mailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="text" required id="password" ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
      <div className={classes.actions}>
        <button onClick={submitHandler2}>Don't have a user?</button>
      </div>
    </Card>
  );
}

export default LoginForm;
