import Link from "next/link";

const Facebook = () => {
  return (
    <Link target="_blank" href={""}>
      <svg
        className="reverse-fill-color"
        width="18"
        height="18"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_10511_22768)">
          <path
            d="M40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 29.9824 7.31367 38.2566 16.875 39.757V25.7813H11.7969V20H16.875V15.5938C16.875 10.5813 19.8609 7.8125 24.4293 7.8125C26.6168 7.8125 28.9062 8.20312 28.9062 8.20312V13.125H26.3844C23.9 13.125 23.125 14.6668 23.125 16.25V20H28.6719L27.7852 25.7813H23.125V39.757C32.6863 38.2566 40 29.9824 40 20Z"
            fill="white"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_10511_22768">
            <rect width="40" height="40" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </Link>
  );
};
export { Facebook };
