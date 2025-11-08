import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return <div className={`h-full w-full max-w-6xl mx-auto ${className}`}>{children}</div>;
};
export default Container;
