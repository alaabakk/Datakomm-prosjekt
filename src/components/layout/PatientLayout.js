import PatientNavigation from "./PatientNavigation";
import classes from "./Layout.module.css";

function PatientLayout(props) {
  return (
    <div>
      <PatientNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default PatientLayout;
