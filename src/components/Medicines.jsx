import React from "react";

const Medicines = () => {
  return (
    <>
      <div className="Medicines-feilds">
        <span>
          Rx
          <input type="text" />
          <a href="#">Save Group</a>
        </span>
        <input type="text" placeholder="Select Template" />
      </div>
      <div className="complaint">
        <table className="complaint-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Medicine</th>
              <th>Dose</th>
              <th>When</th>
              <th>Frequency</th>
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

export default Medicines;
