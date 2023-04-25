import { useAuth_loginMutation } from "../redux/auth.rtk";

const useAuth = () => {
  const [auth_login, { isLoading: auth_isLoginLoading, data: auth_token }] =
    useAuth_loginMutation();

  return {
    auth_login,

    // Loading
    auth_isLoginLoading,

    //Data
    auth_token,
  };
};

export { useAuth };
