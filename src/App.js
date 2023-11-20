import React from "react";
import PatientInfo from "./components/PatientInfo";
import Complaints from "./components/Complaints";
import History_fields from "./components/History_fields";
import Spectacle_Refractor from "./components/Spectacle_Refractor";
import CheckUp from "./components/CheckUp";
import Diagnosis from "./components/Diagnosis";
import Medicines from "./components/Medicines";
import FurtherProcess from "./components/FurtherProcess";

const App = () => {
  const patientData = {
    name: "Narayan Anende",
    age: "12y",
    UHID: 20,
    visits: 0,
  };
  return (
    <>
      <div className="app-container">
        <PatientInfo {...patientData} /> <Complaints />
        <History_fields />
        <Spectacle_Refractor />
        <CheckUp />
        <Diagnosis />
        <Medicines />
        <FurtherProcess />{" "}
      </div>{" "}
    </>
  );
};

export default App;
