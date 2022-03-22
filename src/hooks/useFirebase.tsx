import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import initializeAuthentication from "../auth/firebase.init";
import { setUser } from "../redux/slices/authSlice";

initializeAuthentication();
const useFirebase = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user);
      dispatch(setUser(result.user));
    });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser({}));
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  useEffect((): any => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser({}));
      }
    });
    return () => unsubscribed;
  }, [auth, dispatch]);
  return { googleSignIn, logOut };
};

export default useFirebase;
