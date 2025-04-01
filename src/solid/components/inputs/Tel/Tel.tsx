import { splitProps, type ComponentProps } from "solid-js";
import css from "./Tel.module.css";
import { cls } from "@utils/cls";
import { COUNTRIES } from "./countries";

export default function Tel(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err"]);

  return (
    <label class={cls([css.tel, p.class])}>
      <select name="code">
        {COUNTRIES.map((country) => (
          <option value={country.dial_code}>{country.flag}</option>
        ))}
      </select>
      <input {...rest} type="number" min={0} class={cls([p.err && css.input_err])} title={p.err} />
    </label>
  );
}

type Props = ComponentProps<"input"> & {
  err?: string;
};
