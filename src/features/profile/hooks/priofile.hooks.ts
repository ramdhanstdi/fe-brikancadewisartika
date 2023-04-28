import { useProfileDetaiMutation } from "../redux/profile.rtk";

const useProfile = () => {
  const [getProfile, { data: profile_data }] = useProfileDetaiMutation();
  return {
    getProfile,

    //data
    profile_data,
  };
};

export { useProfile };
