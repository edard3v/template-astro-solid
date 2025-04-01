import css from "./TextArea.module.css";
import { cls } from "@utils/cls";
import { type ComponentProps, splitProps } from "solid-js";

export default function TextArea(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err"]);

  return (
    <label class={cls([css.wrapper, p.class])}>
      <textarea {...rest} class={cls([p.err && css.input_err])} title={p.err} />
    </label>
  );
}

type Props = ComponentProps<"textarea"> & {
  err?: string;
};
