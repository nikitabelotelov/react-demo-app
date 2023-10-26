import classNames from "classnames";
import styles from "./label.module.scss";

type TProps = {
  children: React.ReactNode;
  small?: boolean;
  className?: string;
};

export function Label(props: TProps) {
  return (
    <div className={classNames(styles.label, { [styles.small]: props.small }, props.className)}>
      {props.children}
    </div>
  );
}
