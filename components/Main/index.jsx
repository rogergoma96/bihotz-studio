import useTranslation from "next-translate/useTranslation";
import Links from "../Links";

import { breakpoints } from "../../styles/theme";

const Main = () => {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <section>
          <h2>{t("home:title")}</h2>
          <p>{t("home:contact")}</p>
          <a href="mailto:hello@bihotz-studio.com">hello@bihotz-studio.com</a>
          <a href="tel:+34697525425">+34 697 525 425</a>
          <p>{`Barcelona · ${t("home:country")}`}</p>
        </section>
        <Links />
      </main>

      <style jsx>
        {`
          main {
            margin-left: 20%;
            min-height: calc(100vh - 30px);
            padding: 140px 56px 56px 120px;
          }

          section {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
          }

          h2 {
            font-size: 75px;
            font-weight: normal;
            letter-spacing: -2.5px;
            line-height: 80px;
            margin-bottom: 56px;
            margin-top: 0;
          }

          a,
          p {
            font-size: 40px;
            letter-spacing: -1px;
            line-height: 50px;
            margin: 0;
            padding: 0;
          }

          @media (max-width: ${breakpoints.tablet}) {
            main {
              padding: 128px 88px 40px 88px;
            }

            h2 {
              font-size: 65px;
              line-height: 70px;
            }

            a,
            p {
              font-size: 32px;
              letter-spacing: -1px;
              line-height: 40px;
            }
          }

          @media (max-width: ${breakpoints.mobile}) {
            main {
              padding: 88px 32px 38px;
            }

            h2 {
              font-size: 32px;
              line-height: 40px;
            }

            a,
            p {
              font-size: 18px;
              letter-spacing: -1px;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Main;
