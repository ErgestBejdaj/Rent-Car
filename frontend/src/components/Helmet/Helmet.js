import { useEffect } from "react";

const Helmet = ({ title, children }) => {
  useEffect(() => {
    document.title = title
      ? `${title} | Auto Rent Pojana`
      : "Auto Rent Pojana — Car rental in Tirana";
  }, [title]);

  return <>{children}</>;
};

export default Helmet;
