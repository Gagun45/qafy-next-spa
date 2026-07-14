import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const LogoMark = ({ className }: Props) => {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("size-11", className)}
    >
      <rect
        x="8"
        y="4"
        width="30"
        height="36"
        rx="9"
        className="fill-primary/10 stroke-primary"
        strokeWidth="3"
      />
      <path
        d="M19 10h8"
        className="stroke-primary"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="m28.5 30.5 11 11"
        className="stroke-primary"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="23" cy="34" r="1.75" className="fill-primary" />
    </svg>
  );
};

export default LogoMark;
