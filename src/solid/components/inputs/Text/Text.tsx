import { type ComponentProps, splitProps } from "solid-js";
import css from "./Text.module.css";
import { cls } from "@utils/cls";

export default function Text(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err"]);

  return (
    <label class={cls([css.text, p.class])}>
      <input {...rest} type="text" class={cls([p.err && css.input_err])} title={p.err} />
    </label>
  );
}

type Props = ComponentProps<"input"> & {
  err?: string;
};
