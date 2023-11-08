import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const loginHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert("Authentication failed", "Please check your credentials");
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) return <LoadingOverlay message="logging you in..." />;
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
