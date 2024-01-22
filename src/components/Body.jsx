import Recommended from "./Recommended";
import useOnlineStatus from "../customHooks/useOnlineStatus";
import Offline from "./Offline";
import { useMediaQuery } from "react-responsive";
const Body = () => {
  const isMobiles = useMediaQuery({ maxWidth: 767 });
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <Offline />;
  }
  if (isMobiles) {
    return (
      <div className="flex justify-center items-center h-[80dvh]">
        <h1 className="bg-green-400 text-red-800 p-2 rounded-md">Please isit on Laptop</h1>
      </div>
    );
  }
  return (
    <>
      <Recommended />
    </>
  );
};
export default Body;
