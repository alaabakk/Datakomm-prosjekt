import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function SignUpForm(props) {
  const navigate = useNavigate();
  const mailInputRef = useRef();
  const passwordInputRef = useRef();
  const first_nameInputRef = useRef();
  const last_nameInputRef = useRef();
  const birthdateInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();
  const roleInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredMail = mailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredFirst_name = first_nameInputRef.current.value;
    const enteredLast_name = last_nameInputRef.current.value;
    const enteredBirthdate = birthdateInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    let enteredRole = "patient";
    if (roleInputRef.current.value === "12345678") {
      enteredRole = "nurse";
    }

    const userData = {
      mail: enteredMail,
      password: enteredPassword,
      first_name: enteredFirst_name,
      last_name: enteredLast_name,
      birthdate: enteredBirthdate,
      address: enteredAddress,
      phone: enteredPhone,
      role: enteredRole,
    };
    props.onAddUser(userData);
  }
  function submitHandler2(event) {
    event.preventDefault();
    navigate("/login", { replace: true });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="mail">Email address</label>
          <input type="text" required id="mail" ref={mailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="text" required id="password" ref={passwordInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="first_name">First Name</label>
          <input type="text" required id="first_name" ref={first_nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="last_name">Last Name</label>
          <input type="text" required id="last_name" ref={last_nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="birthdate">Birthdate</label>
          <input type="date" required id="birthdate" ref={birthdateInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="phone">Phone number</label>
          <input type="number" required id="phone" ref={phoneInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="role">If nurse, enter nurse password</label>
          <input type="text" required id="role" ref={roleInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add user</button>
        </div>
      </form>
      <div className={classes.actions}>
        <button onClick={submitHandler2}>Have a user?</button>
      </div>
    </Card>
  );
}

export default SignUpForm;
