import { FC } from "react";
import { useLocation } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login: FC = () => {
  const { googleSignIn } = useFirebase();
  const location: any = useLocation();
  const dest_uri = location?.state?.from?.pathname || "/";

  return (
    <div className="flex justify-center items-center my-20">
      <button
        onClick={() => googleSignIn(dest_uri)}
        className="bg-green-600 text-white font-bold px-3 py-2 rounded"
      >
        Google Login
      </button>
    </div>
  );
};

export default Login;
