import {
  useCreate_merchantMutation,
  useLazyMonitoring_merchantQuery,
} from "../redux/merchant.rtk";

const useMerchant = () => {
  const [sendMerchant, { isLoading: merchat_isLoading }] =
    useCreate_merchantMutation();

  const [
    getMonitoring,
    { isLoading: monitoring_isLoading, data: data_monitoring },
  ] = useLazyMonitoring_merchantQuery();

  return {
    sendMerchant,
    getMonitoring,

    // Loading
    merchat_isLoading,
    monitoring_isLoading,

    // Data
    data_monitoring,
  };
};

export { useMerchant };
