import { breakpoints, colors } from "../../styles/theme";

const Header = () => (
  <>
    <header>
      <a href="mailto:hello@bihotz-studio.com">hello@bihotz-studio.com</a>
      <a href="phone:+34697525425">+34 697 525 425</a>
      <p>Barcelona</p>
    </header>

    <style jsx>{`
      header {
        background: ${colors.white};
        border-bottom: 1px solid ${colors.black};
        display: flex;
        justify-content: flex-end;
        left: 20%;
        padding: 8px;
        position: fixed;
        top: 0;
        width: 80%;
      }

      a,
      p {
        font-size: 20px;
        letter-spacing: -1px;
        margin: 0;
        padding: 0 8px;
      }

      a,
      p:nth-child(2) {
        padding: 0 8px;
      }

      @media (max-width: ${breakpoints.mobile}) {
        p,
        a:nth-child(2) {
          display: none;
        }

        a {
          font-size: 18px;
        }
      }
    `}</style>
  </>
);

export default Header;
