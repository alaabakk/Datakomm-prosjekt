import { Route, Routes } from "react-router-dom";
import { NurseRoutes, PatientRoutes } from "./utils/ProtectedRoutes";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import PatientLayout from "./components/layout/PatientLayout";
import Layout from "./components/layout/Layout";
import SignUpPage from "./pages/SignUp";
import Login from "./pages/Login";
import Patient from "./pages/Patient";
import Kasper from "./pages/kasper";

function App() {
  return (
    <Routes>
      <Route element={<NurseRoutes />}>

          <Route path="/favorites" element={<Layout><FavoritesPage /></Layout>} />
          <Route path="/new-meetups" element={<Layout><NewMeetupsPage /></Layout>} />
          <Route path="/" element={<Layout><AllMeetupsPage /></Layout>} />

      </Route>
      <Route path="/kasper" element={<Kasper/>} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<Login />} />

      <Route element={<PatientRoutes />}>
        <Route path="/patient" element={<PatientLayout><Patient /></PatientLayout>} />
      </Route>
    </Routes>
  );
}

export default App;
