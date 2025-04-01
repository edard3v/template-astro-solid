import css from "./InputEmail.module.css";
import { type ComponentProps, Show, splitProps } from "solid-js";
import { cls } from "@utils/cls";
import ErrSvg from "@solid/components/icons/ErrSvg";

export default function InputEmail(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err", "placeholder"]);

  return (
    <label class={cls([css.wrapper, p.class])}>
      <input
        {...rest}
        type="email"
        placeholder={p.placeholder ?? "example@email.com"}
        class={cls([p.err && css.input_err])}
      />

      <Show when={p.err}>
        <span class={css.err} title={p.err}>
          <ErrSvg />
          <span>{p.err}</span>
        </span>
      </Show>
    </label>
  );
}

type Props = ComponentProps<"input"> & {
  err?: string;
};
