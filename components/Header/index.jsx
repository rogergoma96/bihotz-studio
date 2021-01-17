import { breakpoints, colors } from "../../styles/theme";

const Header = () => (
  <>
    <header>
      <p>hello@bihotz-studio.com</p>
      <span>·</span>
      <p>+34 697 525 425</p>
      <span>·</span>
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

      p {
        font-size: 20px;
        letter-spacing: -1px;
        margin: 0;
        padding: 0 8px;
      }

      p:nth-child(2) {
        padding: 0 8px;
      }

      @media (max-width: ${breakpoints.mobile}) {
        p:nth-child(2),
        p:nth-child(3),
        p:last-child,
        span {
          display: none;
        }
      }
    `}</style>
  </>
);

export default Header;
