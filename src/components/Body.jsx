import Recommended from "./Recommended";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import Offline from "./Offline";
const Body = () => {
  const onlineStatus = useOnlineStatus()
  if(onlineStatus === false){
    return <Offline/>
  }
  return (
    <>
      <Recommended />
    </>
  );
};
export default Body;
