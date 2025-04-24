import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as SecureStore from "expo-secure-store";
import { setCredentials, setPin } from "../../store/authSlice";

function InitAuth({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const credsJson = await SecureStore.getItemAsync("userCredentials");
      if (credsJson) {
        const { user, token } = JSON.parse(credsJson);
        dispatch(setCredentials({ user, token }));
      }

      dispatch(setPin(false));
    };
    checkAuth();
  }, [dispatch]);

  return children;
}

export default InitAuth;
