import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
  {
    linkName: "Login",
    link: "/login",
  },
];

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setOpenMobileNav(false);
  }, [router]);

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
        <div
          className={`nav__barIcon`}
          onClick={() => setOpenMobileNav(!openMobileNav)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
      {openMobileNav && (
        <div className={`nav__mobileNav ${openMobileNav && "nav__mobile_nav_h__full"}`}>
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
