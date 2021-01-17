import { useState } from "react";
import ArrowIcon from "../../Icons/Arrow";

import { breakpoints, colors } from "../../../styles/theme";

const Link = ({ text, href }) => {
  const [color, setColor] = useState(colors.black);

  return (
    <>
      <a
        href={href}
        onMouseEnter={() => setColor(colors.primary)}
        onMouseLeave={() => setColor(colors.black)}
      >
        <ArrowIcon fill={color} />
        <span>{text}</span>
      </a>

      <style jsx>
        {`
          span {
            font-size: 18px;
            margin-left: 8px;
          }

          a {
            cursor: pointer;
            margin: 8px 0;
          }

          a:hover span {
            color: ${colors.primary};
          }

          @media (max-width: ${breakpoints.mobile}) {
            span {
              font-size: 14px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Link;
