import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import cn from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary"  | "third" | "success"  ;
    onClose?: () => void;
  }

  export default function Button({ children, className, onClose, variant = "primary", ...rest }: ButtonProps) {
    const buttonClassName = cn(
      styles.button,
      {
        [styles["button-primary"]]: variant === "primary",
        [styles["button-secondary"]]: variant === "secondary",
        [styles["button-third"]]: variant === "third",
        [styles["button-success"]]: variant === "success",
      },
      className
    );
  
    return (
      <button className={buttonClassName} {...rest}>
        {children}
      </button>
    );
  }
