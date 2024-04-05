export const ButtonDarkMode = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="#000"
      strokeLinecap="square"
      aria-labelledby="nightModeIconTitle"
      fill="currentColor"
      className={className}
    >
      <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />
      <path d="M15.899 12.899a4 4 0 0 1-4.797-4.797A4.002 4.002 0 0 0 12 16c1.9 0 3.49-1.325 3.899-3.101zM12 5V3m0 18v-2m-7-7H2h3zm17 0h-3 3zm-5.05-4.95 2.12-2.12-2.12 2.12zM4.929 19.071 7.05 16.95l-2.12 2.12zM16.95 16.95l2.121 2.121-2.121-2.121zM4.929 4.929 7.05 7.05 4.93 4.93z" />
    </svg>
  )
}
