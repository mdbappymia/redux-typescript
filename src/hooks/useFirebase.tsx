import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import initializeAuthentication from "../auth/firebase/firebase.init";
import { setAuthError, setIsLoading, setUser } from "../redux/slices/authSlice";

initializeAuthentication();
const useFirebase = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const googleSignIn = (dest_uri: any) => {
    dispatch(setIsLoading(true));
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(setUser(result.user));
        navigate(dest_uri);
      })
      .catch((e) => {
        dispatch(setAuthError(e.message));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser({}));
      })
      .catch((error: any) => {
        dispatch(setAuthError(error.message));
      });
  };

  useEffect((): any => {
    dispatch(setIsLoading(true));
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
        dispatch(setIsLoading(false));
      } else {
        dispatch(setUser({}));
        dispatch(setIsLoading(false));
      }
    });
    return () => unsubscribed;
  }, [auth, dispatch]);
  return { googleSignIn, logOut };
};

export default useFirebase;
