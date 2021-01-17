import { breakpoints } from "../../styles/theme";
import Link from "./Link";

const Links = () => (
  <>
    <section>
      <Link text="PORTFOLIO" href="/" />
      <Link text="FOLLOW US" href="/" />
    </section>

    <style jsx>
      {`
        section {
          display: flex;
          flex-direction: column;
          font-family: Arial;
          margin-top: 56px;
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

export default Links;
