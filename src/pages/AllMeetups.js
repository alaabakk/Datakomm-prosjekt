import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedUsers, setLoadedUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://test-backend-react-test-default-rtdb.firebaseio.com/meetups.json" // this is the url of the database
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const allUserData = [];

        for (const key in data) {
          const userData = {
            id: key,
            ...data[key],
          };

          allUserData.push(userData);
        }

        setIsLoading(false);
        setLoadedUsers(allUserData);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Users</h1>
      <MeetupList allUserData={loadedUsers} />
    </section>
  );
}

export default AllMeetupsPage;
