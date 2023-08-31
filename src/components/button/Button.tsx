import { DOMAttributes } from "react";
import style from "./style.module.css";
import clsx from "clsx";
export type ButtonType = "button" | "submit" | "reset";

export interface IButtonProps extends DOMAttributes<HTMLButtonElement> {
  className?: string;
  isDisabeled?: boolean;
  typeButton?: ButtonType;
  type: string;
  onClick?: (event: React.MouseEvent) => void;
}

export function Button({
  className,
  children,
  isDisabeled,
  typeButton,
  onClick,
  type,
  ...rest
}: IButtonProps) {
  return (
    <button
      className={clsx(className, {
        Button__disabeled: isDisabeled,
        [style.button__bust]: type === "button__bust",
      })}
      disabled={isDisabeled}
      type={typeButton}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
