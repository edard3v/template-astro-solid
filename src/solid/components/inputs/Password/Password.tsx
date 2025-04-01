import { type ComponentProps, createSignal, splitProps } from "solid-js";
import css from "./Password.module.css";
import { cls } from "@utils/cls";

export default function Password(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err", "placeholder"]);
  const [isVisible, setIsVisible] = createSignal(false);

  return (
    <label class={cls([css.password, p.class])}>
      <input
        {...rest}
        type={isVisible() ? "text" : "password"}
        placeholder={p.placeholder ?? "Contraseña"}
        class={cls([p.err && css.input_err])}
        title={p.err}
      />
      <span class={css.emoji} onClick={() => setIsVisible(!isVisible())}>
        {isVisible() ? "🧐" : "😵"}
      </span>
    </label>
  );
}

type Props = ComponentProps<"input"> & {
  err?: string;
};
