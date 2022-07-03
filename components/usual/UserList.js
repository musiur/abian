import { useState } from "react";
import UserTableData from "../../static/data/userlist.json";

const UserList = () => {
  const [adminView, setAdminView] = useState(true);
  const tHead = UserTableData[0].tHeading;
  const tBody = UserTableData[1].tBody;
  return (
    <div className="userlist__container">
      <h1>User list</h1>
      <button
        onClick={() => {
          setAdminView(!adminView);
        }}
      >
        {adminView ? "Admin View" : "Member View"}
      </button>
      <table id="userlist">
        <thead>
          <tr>
            {tHead.map((th, i) => {
              if (adminView) {
                return <th key={i}>{th}</th>;
              } else {
                return th === "Actions" ? null : <th key={i}>{th}</th>;
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
                  return <td key={i}>{td}</td>;
                })}
                {adminView && (
                  <td>
                    <button>Remove</button>
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

export default UserList;
