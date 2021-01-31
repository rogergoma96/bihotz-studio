const ArrowIcon = ({ fill = "#121314" }) => (
  <svg
    width={24}
    height={20}
    viewBox="0 0 24 20"
    xmlns="http://www.w3.org/2000/svg"
    fill={fill}
  >
    <g fill="none" fillRule="evenodd">
      <path stroke={fill} d="M1.5 1.5L1.732 15" />
      <path
        d="M13 10l9 4.5-9 4.5v-4H2v-1h11v-4z"
        fill={fill}
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default ArrowIcon;
