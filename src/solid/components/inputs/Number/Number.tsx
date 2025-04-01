import css from "./Number.module.css";
import { splitProps, type ComponentProps } from "solid-js";
import { cls } from "@utils/cls";

export default function Number(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err"]);

  return (
    <label class={cls([css.number, p.class])}>
      <input {...rest} type="number" min={0} class={cls([p.err && css.input_err])} title={p.err} />
    </label>
  );
}

type Props = ComponentProps<"input"> & {
  err?: string;
};
