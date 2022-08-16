import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../pages/_app";

const DonationTable = () => {
  const [user, setUser] = useContext(UserContext);
  const [adminView, setAdminView] = useState(false);
  const [donationList, setDonationList] = useState([]);
  const tHead = ["name", "location", "Contact No", "Transaction ID", "Amount", "Payment Method", "Date", "Progress", "Memebership", "Event", "Action"];

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(`http://localhost:9000/donation/list`);
      setDonationList(response.data.result);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    if (user.details.member_type === "Admin") {
      setAdminView(true);
    }
  }, [user]);

  const tBody = donationList;

  return (
    <div className="donationlist__container">
      <h1>Donation list</h1>

      <Link href="/">Donate now!</Link>

      {/* table  */}
      {donationList.length ? (
        <table id="donationlist">
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
              const {
                id,
                name,
                member_type,
                contact_number,
                donar_id,
                event_id,
                location,
                progress,
                transaction_id,
                created_at,
                amount,
                payment_method,
              } = tRow;
              const tds = [name, location, contact_number, transaction_id, amount, payment_method, created_at?.split(" ")[0], progress, member_type, event_id];
              return (
                <tr key={i}>
                  {tds.map((td, i) => {
                    return <td key={i}>{td}</td>;
                  })}
                  {adminView && (
                    <td>
                      <RemoveDonation id={id} />
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>No donation history found!</div>
      )}
    </div>
  );
};

export default DonationTable;

const RemoveDonation = ({ id }) => {
  const handleRemove = async () => {
    const response = await axios.delete(
      `http://localhost:9000/donation/delete?id=${id}`
    );
    // console.log(response);
  };
  // console.log(id);
  return <button onClick={handleRemove}>Remove</button>;
};
