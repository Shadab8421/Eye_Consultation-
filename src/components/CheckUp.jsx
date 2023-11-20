import React from "react";

const CheckUp = () => {
  return (
    <>
      <div className="tableContainer">
        <div className="Spectacle">
          <table className="checkup_tbl">
            <thead>
              <tr>
                <th colSpan={4}>While Checkup</th>
              </tr>
              <tr>
                <th></th>
                <th>Distance</th>
                <th>Near</th>
                <th>IOP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>R</td>
                <td>
                  <input type="text" placeholder="RVN" className="input" />
                </td>
                <td>
                  <input type="text" placeholder="RVNN" className="input" />
                </td>
                <td>
                  <input type="text" placeholder="RIOP" className="input" />
                </td>
              </tr>
              <tr>
                <td>L</td>
                <td>
                  <input type="text" placeholder="LVN" className="input" />
                </td>
                <td>
                  <input type="text" placeholder="LVNN" className="input" />
                </td>
                <td>
                  <input type="text" placeholder="LIOP" className="input" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="Refractor">
          <table>
            <thead>
              <tr>
                <th colSpan={7}>Refraction</th>
              </tr>
              <tr>
                <th></th>
                <th>SPH</th>
                <th>CYL</th>
                <th>AXIS</th>
                <th>VN</th>
                <th>Near</th>
                <th>N VN</th>
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
    </>
  );
};

export default CheckUp;
