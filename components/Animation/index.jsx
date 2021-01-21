import { useEffect, useState } from "react";
import { breakpoints, colors } from "../../styles/theme";

const Animation = () => {
  const [heightOfAnimation, setHeightOfAnimation] = useState("0px");

  const handleResize = () =>
    setHeightOfAnimation(
      `${document.getElementById("lateral-animation").offsetWidth}px`
    );

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    setHeightOfAnimation(
      `${document.getElementById("lateral-animation").offsetWidth}px`
    );

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section id="lateral-animation">
        <h1>Bihotz Studio</h1>
        <span aria-hidden>Bihotz Studio</span>
        <span aria-hidden>Bihotz Studio</span>
      </section>

      <style jsx>
        {`
          section {
            background: ${colors.primary};
            border-right: 1px solid ${colors.black};
            height: 120%;
            overflow: hidden;
            position: fixed;
            top: 0;
            width: 20%;
          }

          h1 {
            font-weight: normal;
            margin: 0;
          }

          h1,
          span {
            align-items: center;
            animation: move-to-top 12s linear infinite;
            display: flex;
            font-size: 130px;
            letter-spacing: -4px;
            position: absolute;
            top: -100vh;
            transform: rotate(-90deg);
            transform-origin: 0 0;
            user-select: none;
            white-space: nowrap;
            height: ${heightOfAnimation};
          }

          span:nth-child(2) {
            animation-delay: 4s;
          }

          span:nth-child(3) {
            animation-delay: 8s;
          }

          @keyframes move-to-top {
            0% {
              top: 250vh;
            }
            100% {
              top: -100vh;
            }
          }

          @media (max-width: ${breakpoints.mobile}) {
            span {
              font-size: 80px;
            }
          }
        `}
      </style>
    </>
  );
};

export default Animation;
