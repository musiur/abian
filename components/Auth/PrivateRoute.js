import { useRouter } from "next/router";
import { useContext } from "react";
import { UserContext } from "../../pages/_app";

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useContext(UserContext);
  const router = useRouter();
  const doc = typeof document !== "undefined";
  !user.login && doc && router.push("/login");
  return user.login ? <div>{children}</div> : <div></div>;
};

export default PrivateRoute;
