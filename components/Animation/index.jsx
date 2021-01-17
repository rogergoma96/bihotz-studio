import { colors } from "../../styles/theme";

const Animation = () => (
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
          position: absolute;
        }

        span {
          animation: move-to-top 12s linear infinite;
          font-size: 130px;
          left: 10%;
          letter-spacing: -4px;
          position: absolute;
          top: -100vh;
          transform: rotate(-90deg);
          transform-origin: 0 0;
          white-space: nowrap;
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

export default Animation;
