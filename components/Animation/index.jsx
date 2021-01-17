import { useEffect, useState } from "react";
import { colors } from "../../styles/theme";

const Animation = () => {
  const [heightOfAnimation, setHeightOfAnimation] = useState("0px");

  const handleResize = () =>
    setHeightOfAnimation(
      `${document.getElementsByTagName("h1")[0].offsetWidth}px`
    );

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    setHeightOfAnimation(
      `${document.getElementsByTagName("h1")[0].offsetWidth}px`
    );

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section>
        <h1>
          <span>Bihotz Studio</span>
          <span>Bihotz Studio</span>
          <span>Bihotz Studio</span>
        </h1>
      </section>

      <style jsx>
        {`
          section {
            background: ${colors.primary};
            border-right: 1px solid ${colors.black};
            height: 100%;
            overflow: hidden;
            position: fixed;
            top: 0;
            width: 20%;
          }

          h1 {
            font-weight: normal;
            height: 100%;
            margin: 0;
            position: absolute;
            width: 100%;
          }

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
        `}
      </style>
    </>
  );
};

export default Animation;
