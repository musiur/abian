import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../../pages/_app";

const PublicRoute = ({ children }) => {
  const [user, setUser] = useContext(UserContext);
  return !user.login ? (
    <div>{children}</div>
  ) : (
    <div className="container section-gap">
      <Link href="/" passHref>
        <button className="btn-primary">Back to home</button>
      </Link>
    </div>
  );
};

export default PublicRoute;
