import { useNavigate } from "react-router-dom";

import SignUpForm from "../components/meetups/SignUpForm";

function SignUpPage() {
  const navigate = useNavigate();

  function addUserHandler(userData) {
    fetch("https://test-backend-react-test-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-Type": "application/json" },
    }).then(() => {
      navigate("/login", { replace: true });
    });
  }

  return (
    <section>
      <h1>Add new user</h1>
      <SignUpForm onAddUser={addUserHandler} />
    </section>
  );
}

export default SignUpPage;
