import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import LargeScreen from "./large-screen/largeScreen";
import SmallScreen from "./small-screen/smallScreen";

if (typeof window !== "undefined") {
}

/**
 * @Hook
 *
 * identifies the screen size.
 */
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize
      const handleResize = () => {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
};

const Footer: NextPage = () => {
  const size = useWindowSize();

  const SmScreen = () => {
    return <SmallScreen />;
  };

  const LgScreen = () => {
    return <LargeScreen />;
  };

  return <>{size.width <= 990 ? <SmScreen /> : <LgScreen />}</>;
};

export default Footer;
