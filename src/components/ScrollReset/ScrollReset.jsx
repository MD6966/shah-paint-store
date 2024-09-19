import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useRouter from "../../utils/useRouter";
const ScrollReset = () => {
  const { location } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, Navigate]);

  return null;
};

export default ScrollReset;
