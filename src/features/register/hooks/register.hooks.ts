// RTK
import { useRegisterMutation } from "../redux/register.rtk";

const useRegister = () => {
  const [register, { isLoading: register_loading }] = useRegisterMutation();

  return {
    register,

    // Loading
    register_loading,
  };
};

export { useRegister };
