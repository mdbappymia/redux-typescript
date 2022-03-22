import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { googleSignIn } = useFirebase();
  return (
    <div className="flex justify-center items-center my-20">
      <button
        onClick={googleSignIn}
        className="bg-green-600 text-white font-bold px-3 py-2 rounded"
      >
        Google Login
      </button>
    </div>
  );
};

export default Login;
