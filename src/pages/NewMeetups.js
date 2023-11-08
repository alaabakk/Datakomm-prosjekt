import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
    const navigate = useNavigate();


  function addMeetupHandler(userData, user) {
    fetch(
      `https://test-backend-react-test-default-rtdb.firebaseio.com/${user}.json`,
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "content-Type": "application/json" },
      }
    ).then(() => {
        navigate("/", { replace: true });
    });
  }

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
