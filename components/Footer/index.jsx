import { breakpoints, colors } from "../../styles/theme";

const Footer = () => (
  <>
    <footer>
      <p>&copy; Bihotz Studio 2021</p>
    </footer>

    <style jsx>{`
      footer {
        display: flex;
        justify-content: flex-end;
        margin-left: 20%;
        padding: 0 16px 16px 0;
        width: 80%;
      }

      p {
        font-size: 12px;
        font-family: Arial;
        margin: 0;
        padding: 0;
      }
    `}</style>
  </>
);

export default Footer;
