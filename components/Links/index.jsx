import useTranslation from "next-translate/useTranslation";
import { breakpoints } from "../../styles/theme";
import Link from "./Link";

const Links = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <section>
        <Link text="PORTFOLIO" href="/" />
        <Link text={t("home:follow")} href="/" />
      </section>

      <style jsx>
        {`
          section {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
            font-family: Arial;
            margin-top: 56px;
            text-transform: uppercase;
          }

          @media (max-width: ${breakpoints.mobile}) {
            section {
              margin-top: 48px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Links;
