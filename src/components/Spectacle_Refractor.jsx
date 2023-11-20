import React from "react";

const Spectacle_Refractor = () => {
  return (
    <div className="tableContainer">
      <div className="Spectacle">
        <table>
          <thead>
            <tr>
              <th colSpan="5" className="heading">
                Old Spectacle
              </th>
            </tr>
            <tr>
              <th></th>
              <th>SPH</th>
              <th>CYL</th>
              <th>AXIS</th>
              <th>ADD</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>R</td>
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
            </tr>
            <tr>
              <td>L</td>
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
            </tr>
          </tbody>
        </table>
      </div>
      <div className="Refractor">
        <table>
          <thead>
            <tr>
              <th colSpan="5" className="heading">
                Auto Refractor
              </th>
            </tr>
            <tr>
              <th></th>
              <th>SPH</th>
              <th>CYL</th>
              <th>AXIS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>R</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <td>L</td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Spectacle_Refractor;
