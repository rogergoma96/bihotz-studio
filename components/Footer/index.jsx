import { colors } from "../../styles/theme";

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
        padding: 8px;
        width: 80%;
      }

      p {
        font-size: 12px;
        font-family: Arial;
        margin: 0;
        padding: 8px;
      }
    `}</style>
  </>
);

export default Footer;
