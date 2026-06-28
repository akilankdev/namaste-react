import { useState,useEffect } from "react";

//this hook doesnt take any input and produces a boolean value.
const useOnlineStatus = () => {
  const [onlineStatus,setOnlineStatus] = useState(true);
  
  //These event listeners will constantly checks for the event forever,It wouldnt stop at any point.
  useEffect(()=>{
    window.addEventListener("offline",() => {
      setOnlineStatus(false);
    });
    window.addEventListener("online",() => {
      setOnlineStatus(true);
    });
  },[]);

  return onlineStatus;
}

export default useOnlineStatus;