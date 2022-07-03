import { createContext, useState } from "react";
import "../styles/components/donationlist.scss";
import "../styles/components/navbar.scss";
import "../styles/components/userlist.scss";
import "../styles/globals.css";
import "../styles/globals.scss";
import "../styles/pages/about.scss";
import "../styles/pages/dashboard.scss";
import "../styles/pages/projects.scss";
import Footer from "/components/global/Footer";
import Navbar from "/components/global/Navbar";

export const UserContext = createContext();

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({ login: false, details: {} });
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="mainroot">
        <Navbar />
        <main style={{ minHeight: "80vh" }}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default MyApp;
