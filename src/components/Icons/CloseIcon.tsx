export default function CloseIcon({
  className = "size-5",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`${className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );
}
