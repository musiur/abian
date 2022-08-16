import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { setCookie } from "../../cookies";
import { UserContext } from "../../pages/_app";

const Settings = () => {
  const [user, setUser] = useContext(UserContext);
  const router = useRouter();
  const handleUpdate = () => {
    const id = user.details.id;
    if (id) {
      const member_type = user.details.member_type;
      const fetchAPI = async () => {
        const response = await axios.delete(
          `http://localhost:9000/${member_type === "admin" ? "admins": "users"}/delete?id=${id}`
        );
        console.log(response);
        if (response.status === 200) {
          const emptyUser = { login: false, details: {} };
          setCookie("userdata", JSON.stringify(emptyUser), 20);
          setUser(emptyUser);
          router.push("/");
        }
      };

      fetchAPI();
    }
  };
  return (
    <div className="dc__settings">
      <h3>Profile settings</h3>
      <p>
        Are you sure to delete your account from ABIAN2018 ? Your current all
        data will be removed forever.
      </p>
      <button onClick={handleUpdate}>Delete account</button>
    </div>
  );
};

export default Settings;
