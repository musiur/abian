import {
  faCalendarDays,
  faCalendarPlus
} from "@fortawesome/free-regular-svg-icons";
import {
  faDonate,
  faGear,
  faUserAlt,
  faUserCheck
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PrivateRoute from "../components/Auth/PrivateRoute";
import CommonProfile from "../components/dashboard/CommonProfile";
import CreateEvent from "../components/dashboard/CreateEvent";
import DonationTable from "../components/dashboard/DonationTable";
import Events from "../components/dashboard/Events";
import Settings from "../components/dashboard/Settings";
import UserList from "../components/dashboard/UserList";
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
    link: "Events",
    icon: faCalendarDays,
  },
  {
    link: "Create Event",
    icon: faCalendarPlus,
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

const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <PrivateRoute>
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
          {currentTab === 2 && <Events />}
          {currentTab === 3 && <CreateEvent />}
          {currentTab === 4 && <DonationTable />}
          {currentTab === 5 && <Settings />}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default Dashboard;
