import React from "react";

const FurtherProcess = () => {
  const SaveOrPrint = () => {
    window.print();
  };
  return (
    <div className="FurtherProcess">
      <div className="upper_field">
        <input type="text" placeholder="Advice" />
        <input type="text" placeholder="Test Requested" />
      </div>
      <div className="lower_field">
        <input type="text" placeholder="FollowUp Date" />
        <input type="text" placeholder="OT Procedure" />
        <input type="text" placeholder="Refer To" />
        <button onClick={SaveOrPrint}>Save & Print</button>
      </div>
    </div>
  );
};

export default FurtherProcess;
