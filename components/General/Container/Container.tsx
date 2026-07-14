import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return <div className={`mx-auto flex h-full w-full max-w-7xl flex-col items-center px-5 sm:px-8 ${className ?? ""}`}>{children}</div>;
};
export default Container;
