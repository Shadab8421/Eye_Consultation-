import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const PatientInfo = (props) => {
  const { name, age, UHID, visits } = props;
  const languages = ["English", "Marathi", "Hindi"];
  return (
    <div className="PatientInfo">
      <h4>{name}</h4>
      <p>|</p>
      <p>Age: {age}</p>
      <p>|</p>
      <p>UHID: {UHID}</p>
      <p>|</p>
      <p>Visits: {visits}</p>
      <div className="buttons">
        <select className="languageDropdown">
          {languages.map((language, index) => (
            <option key={index} value={language}>
              {language}
            </option>
          ))}
        </select>
        <span className="wp-icon">
          <WhatsAppIcon />
        </span>
      </div>
    </div>
  );
};

export default PatientInfo;
