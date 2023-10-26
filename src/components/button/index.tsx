import styles from "./button.module.scss";
import classNames from "classnames";

type TProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export function Button(props: TProps) {
  return (
    <button
      className={classNames(styles.button, props.className)}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}