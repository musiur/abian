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

function MyApp({ Component, pageProps }) {
  return (
    <div className="mainroot">
      {/* using as Layout Coponent */}
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
