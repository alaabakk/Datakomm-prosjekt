import { useRef } from "react";

import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const userInputRef = useRef();
  const overpressureInputRef = useRef();
  const underpressureInputRef = useRef();
  const dateInputRef = useRef();


  function submitHandler(event) {
    event.preventDefault();

    const enteredUser = userInputRef.current.value;
    const enteredOverpressure = overpressureInputRef.current.value;
    const enteredUnderpressure = underpressureInputRef.current.value;
    const enteredDate = dateInputRef.current.value;


    const user = enteredUser

    const userData = {
      overpressure: enteredOverpressure,
      underpressure: enteredUnderpressure,
      date: enteredDate,
    };
    props.onAddMeetup(userData, user);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="user">User</label>
          <input type="text" required id="user" ref={userInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="overpressure">Overpressure</label>
          <input type="number" required id="overpressure" ref={overpressureInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="underpressure">Underpressure</label>
          <input type="number" required id="underpressure" ref={underpressureInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Date</label>
          <input type="date" required id="date" ref={dateInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Mesurement</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
