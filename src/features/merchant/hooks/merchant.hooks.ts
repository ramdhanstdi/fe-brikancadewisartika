import {
  useCreate_merchantMutation,
  useLazyMonitoring_merchantQuery,
  useLazyList_merchantQuery,
  useUpdate_merchantMutation,
  useLazyListbyid_merchantQuery,
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

  const [
    getListById,
    { data: listDatabyId_merchant, isLoading: listId_loading },
  ] = useLazyListbyid_merchantQuery();

  return {
    sendMerchant,
    getMonitoring,
    getList,
    updateMerchant,
    getListById,

    // Loading
    merchat_isLoading,
    monitoring_isLoading,
    list_loading,
    update_loading,
    listId_loading,

    // Data
    data_monitoring,
    listData_merchant,
    listDatabyId_merchant,
  };
};

export { useMerchant };
