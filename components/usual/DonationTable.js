import { useState } from "react";
import TableData from "../../static/data/historylist.json";

const restrictedTableData = ["Name", "Number", "Actions"];

const DonationTable = () => {
  const [adminView, setAdminView] = useState(true);

  const tHead = TableData[0].tHeading;
  const tBody = TableData[1].tBody;

  return (
    <div className="donationlist__container">
      <h1>Donation list</h1>
      <button
        onClick={() => {
          setAdminView(!adminView);
        }}
      >
        {adminView ? "Admin View" : "Member View"}
      </button>

      {/* table  */}
      <table id="donationlist">
        <thead>
          <tr>
            {tHead.map((th, i) => {
              if (adminView) {
                return <th key={i}>{th}</th>;
              } else {
                return restrictedTableData.includes(th) ? null : (
                  <th key={i}>{th}</th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {tBody.map((tRow, i) => {
            return (
              <tr key={i}>
                {tRow.tr.map((tData, i) => {
                  const { th, td } = tData;

                  if (adminView) {
                    return <td key={i}>{td}</td>;
                  } else {
                    return restrictedTableData.includes(th) ? null : (
                      <td key={i}>{td}</td>
                    );
                  }
                })}
                {adminView && (
                  <td>
                    <button>Progress</button>
                    <button>Update</button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DonationTable;
