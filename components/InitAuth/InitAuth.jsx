import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as SecureStore from "expo-secure-store";
import { setPin, setCredentials } from "../../store/authSlice";

function InitAuth({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const creds = await SecureStore.getItemAsync("userCredentials");

      if (creds) {
        const pinSet = await SecureStore.getItemAsync("pinSet");

        if (!pinSet) {
          dispatch(setPin(false));
        } else {
          dispatch(setCredentials({ user: creds, token: null }));
        }
      } else {
        dispatch(setCredentials({ user: null, token: null }));
      }
    };

    checkAuth();
  }, [dispatch]);

  return children;
}

export default InitAuth;
