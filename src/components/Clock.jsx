import { useEffect, useState } from "react";

// get current time
function clock() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", second: "2-digit", hour12: false })
}

function Clock() {
  const [ctime, setTime] = useState(clock);
 
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(clock());
        }, 1000);

        return () => clearInterval(interval);
    }, [ctime]);
 

  return (
    <div className="clock">
      {ctime}  
    </div>
  );
}
export default Clock