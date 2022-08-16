import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../pages/_app";

const UserList = () => {
  const [user, setUser] = useContext(UserContext);
  const [adminView, setAdminView] = useState(false);
  const [userList, setUserList] = useState([]);
  const tHead = ["Name", "Member Type", "phone", "Actions"];

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(`http://localhost:9000/users`);
      setUserList(response.data.result);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    if (user.details.member_type === "Admin") {
      setAdminView(true);
    }
  }, [user]);

  const tBody = userList;

  return (
    <div className="userlist__container">
      <h1>User list</h1>
      {userList.length ? (
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
              const { fullname, member_type, phone, id } = tRow;
              const tds = [fullname, member_type, phone];
              return (
                <tr key={i}>
                  {tds.map((td, i) => {
                    return <td key={i}>{td}</td>;
                  })}
                  {adminView && (
                    <td>
                      <RemoveUser id={id} />
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>No user found!</div>
      )}
    </div>
  );
};

export default UserList;

const RemoveUser = ({ id }) => {
  const handleRemove = async () => {
    const response = await axios.delete(
      `http://localhost:9000/users/delete?id=${id}`
    );
    // console.log(response);
  };
  // console.log(id);
  return <button onClick={handleRemove}>Remove</button>;
};
