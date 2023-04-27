import { useCreate_merchantMutation } from "../redux/merchant.rtk";

const useMerchant = () => {
  const [sendMerchant, { isLoading: merchat_isLoading }] =
    useCreate_merchantMutation();

  return {
    sendMerchant,

    // Loading
    merchat_isLoading,
  };
};

export { useMerchant };
