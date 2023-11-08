import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../components/store/auth-context";

import React from "react";
import PatientItem from "../components/meetups/PatientItem";

function Patient() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedUserInfo, setLoadedUserInfo] = useState([]);
  const { isAuthenticated } = useContext(AuthContext); // Access the isAuthenticated variable from the AuthContext

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://test-backend-react-test-default-rtdb.firebaseio.com/${isAuthenticated.role}.json` // this is the url of the database
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
        setLoadedUserInfo(allUserData);
      });
  }, [isAuthenticated.role]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Patient</h1>
      <div>
        <section>
          <PatientItem allUserData={loadedUserInfo} />
        </section>
      </div>
    </section>
  );
}

export default Patient;
