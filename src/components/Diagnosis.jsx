import React from "react";

const Diagnosis = () => {
  return (
    <div className="complaint">
      <table className="complaint-table">
        <thead>
          <tr>
            <th colSpan={5}>Diagnosis</th>
          </tr>
          <tr>
            <th>ID</th>
            <th>Diagnosis</th>
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
              <button>X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Diagnosis;
