import { useEffect } from "react";

const useResizer = (callback: Function) => {
  useEffect(() => {
    callback();
    window.addEventListener("resize", () => callback());

    return () => {
      window.removeEventListener("resize", () => callback());
    };
  }, [callback]);
};

export default useResizer;
