import {
  useCreate_merchantMutation,
  useLazyMonitoring_merchantQuery,
  useLazyList_merchantQuery,
  useUpdate_merchantMutation,
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

  const [updateMerchant, { isLoading: update_loading }] =
    useUpdate_merchantMutation();

  return {
    sendMerchant,
    getMonitoring,
    getList,
    updateMerchant,

    // Loading
    merchat_isLoading,
    monitoring_isLoading,
    list_loading,
    update_loading,

    // Data
    data_monitoring,
    listData_merchant,
  };
};

export { useMerchant };
