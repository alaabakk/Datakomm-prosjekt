import React, { useState, useEffect } from "react";

function Kasper() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.kaspergaupmadsen.no/Patients/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPatients(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Patients List</h1>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            {patient.first_name} {patient.last_name} - Birthdate:{" "}
            {patient.birthDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Kasper;