import {
  faDonate,
  faGear,
  faUserAlt,
  faUserCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import CommonProfile from "../components/usual/CommonProfile";
import DonationTable from "../components/usual/DonationTable";
import Settings from "../components/usual/Settings";
import UserList from "../components/usual/UserList";
import { getCookie } from "../cookies";
import { UserContext } from "./_app";
const sideNavList = [
  {
    link: "Profile",
    icon: faUserAlt,
  },
  {
    link: "Users",
    icon: faUserCheck,
  },
  {
    link: "Donations",
    icon: faDonate,
  },
  {
    link: "Settings",
    icon: faGear,
  },
];
const doc = typeof document !== "undefined";

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [user, setUser] = useContext(UserContext);

  const router = useRouter();
  const userCookie = doc && JSON.parse(getCookie("userdata"));

  if (doc && user.login && userCookie.login) {
    return (
      <div className="dashboard__container">
        <div className="dc__sidenav">
          <ul>
            {sideNavList.map((item, i) => {
              const { link, icon } = item;
              return (
                <li
                  key={i}
                  onClick={() => setCurrentTab(i)}
                  className={`${currentTab === i && "dc__sidenav__li_active"}`}
                >
                  <FontAwesomeIcon icon={icon} style={{ maxWidth: "30px" }} />
                  <span>{link}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="dc__field">
          {currentTab === 0 && <CommonProfile />}
          {currentTab === 1 && <UserList />}
          {currentTab === 2 && <DonationTable />}
          {currentTab === 3 && <Settings />}
        </div>
      </div>
    );
  } else {
    doc && !user.login && router.push("/");
    return <div></div>;
  }
};

export default Dashboard;
