import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  appName: string;
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button onClick={() => alert(`안녕하세요 ${appName}!`)}>{children}</button>
  );
};
