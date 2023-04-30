import {
  useCreate_merchantMutation,
  useLazyMonitoring_merchantQuery,
  useLazyList_merchantQuery,
} from "../redux/merchant.rtk";

const useMerchant = () => {
  const [sendMerchant, { isLoading: merchat_isLoading }] =
    useCreate_merchantMutation();

  const [
    getMonitoring,
    { isLoading: monitoring_isLoading, data: data_monitoring },
  ] = useLazyMonitoring_merchantQuery();

  const [getList, { isLoading: list_loading, data: listData_merchant }] =
    useLazyList_merchantQuery();

  return {
    sendMerchant,
    getMonitoring,
    getList,

    // Loading
    merchat_isLoading,
    monitoring_isLoading,
    list_loading,

    // Data
    data_monitoring,
    listData_merchant,
  };
};

export { useMerchant };
