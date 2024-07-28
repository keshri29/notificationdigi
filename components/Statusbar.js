import { IoBatteryHalf } from "react-icons/io5";
import { TiWiFi } from "react-icons/ti";
import { BiSignal4 } from "react-icons/bi";
import { BsCursorFill } from "react-icons/bs";
import RealTimeClock from "@/components/RealTimeClock";
import { useEffect, useState } from "react";

const Statusbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="text-white text-center mb-6 flex justify-between items-center w-full">
        <span className="flex gap-2 items-center">
          <p>{mounted && <RealTimeClock />}</p> <BsCursorFill />
        </span>
        <span className="flex gap-2 items-center">
          <BiSignal4 />
          <TiWiFi />
          <IoBatteryHalf />
        </span>
      </div>
    </>
  );
};

export default Statusbar;
