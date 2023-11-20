import React from "react";

const Complaint = () => {
  return (
    <>
      <div className="Medicines-feilds">
        <span>
          <input type="text" />
          <a href="#">Save Group</a>
        </span>
        <input type="text" placeholder="Select Consultation Template" />
      </div>
      <div className="complaint">
        <table className="complaint-table">
          <thead>
            <tr>
              <th colSpan={7}>Complaints</th>
            </tr>
            <tr>
              <th>ID</th>
              <th>Complaint</th>
              <th>Frequency</th>
              <th>Severity</th>
              <th>Duration</th>
              <th>Notes</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <button>X</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Complaint;
