import styles from "./select.module.scss";
import ReactSelect, { Props as ReactSelectProps } from "react-select";
import { SelectOption } from "../../store/types";
import { Label } from "../label";

type TProps = {
  label?: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  small?: boolean;
} & ReactSelectProps;

export function Select({ label, small, ...rest }: TProps) {
  const selected = rest.options.find((option) => option.value === rest.value);
  const onChange = (option: unknown) => {
    rest.onChange((option as SelectOption).value);
  };
  return (
    <div className={styles.root}>
      {label && <Label className={styles.label} small={small}>{label}</Label>}
      <ReactSelect
        {...rest}
        components={{
          IndicatorSeparator: () => null,
        }}
        onChange={onChange}
        value={selected}
        classNames={{
          control: () => {
            return styles.control;
          },
          singleValue: () => {
            return styles.value;
          },
        }}
      />
    </div>
  );
}
