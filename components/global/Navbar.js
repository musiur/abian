import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { setCookie } from "../../cookies";
import { UserContext } from "../../pages/_app";

const links = [
  {
    linkName: "Home",
    link: "/",
  },
  {
    linkName: "Projects",
    link: "/projects",
  },
  {
    linkName: "About",
    link: "/about-us",
  },
];

const emptyUser = { login: false, details: {} };

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const router = useRouter();
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    setOpenMobileNav(false);
  }, [router]);

  const logout = () => {
    setCookie("userdata", JSON.stringify(emptyUser));
    setUser({ ...user, login: false });
  };

  return (
    <nav className={`nav`}>
      <div className={`mainNav`}>
        <Link href="/" passHref={true}>
          <div className={`nav__leftDiv`}>
            ABIAN
            <span>FUND</span>
          </div>
        </Link>

        <div className={`nav__rightDiv`}>
          {links.map((data, i) => {
            return (
              <div
                key={i}
                style={{
                  color: `${
                    data.link === router.pathname ? "orange" : "white"
                  }`,
                }}
              >
                {
                  <Link href={data.link} passHref>
                    <p>{data.linkName}</p>
                  </Link>
                }
              </div>
            );
          })}
          <div>
            {user.login && (
              <Link href="/dashboard" passHref>
                <p
                  className="username-color"
                  style={{
                    color: `${
                      router.pathname === "/dashboard" ? "orange" : "white"
                    }`,
                  }}
                >
                  {user.details.username ? user.details.username : "Dashboard"}
                </p>
              </Link>
            )}
          </div>
          <div>
            {user.login ? (
              <button className="btn-nav" onClick={logout}>
                Logout
              </button>
            ) : (
              <Link href="/login" passHref>
                <button className="btn-nav">Login</button>
              </Link>
            )}
          </div>
        </div>
        <div
          className={`nav__barIcon`}
          onClick={() => setOpenMobileNav(!openMobileNav)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      {openMobileNav && (
        <div
          className={`nav__mobileNav ${
            openMobileNav && "nav__mobile_nav_h__full"
          }`}
        >
          {links.map((data, i) => {
            return (
              <div
                key={i}
                style={{
                  color: `${
                    data.link === router.pathname ? "orange" : "white"
                  }`,
                }}
              >
                {
                  <Link href={data.link}>
                    {data.linkName === "Login" ? (
                      <button className="btn-nav">{data.linkName}</button>
                    ) : (
                      <p>{data.linkName}</p>
                    )}
                  </Link>
                }
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
