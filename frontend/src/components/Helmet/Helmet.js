import { useEffect } from "react";
import { useLang } from "../../lib/i18n";

const Helmet = ({ title, children }) => {
  const { t } = useLang();
  const fallback = t("title.default");

  useEffect(() => {
    document.title = title ? `${title} | Auto Rent Pojana` : fallback;
  }, [title, fallback]);

  return <>{children}</>;
};

export default Helmet;
