import { createSignal, splitProps, type ComponentProps } from "solid-js";
import css from "./InputFile.module.css";
import { cls } from "@utils/cls";

export default function InputFile(props: Props) {
  const [p, rest] = splitProps(props, ["class", "err", "placeholder"]);
  const [file, setFile] = createSignal(p.placeholder);

  const handle_file = (event: Event) => {
    const input = event.currentTarget as HTMLInputElement;
    setFile(input.files?.[0]?.name || p.placeholder);

    const txt = input.parentElement?.querySelector("div");
    if (input.files?.length) {
      txt?.setAttribute("style", "color:var(--primary);");
    } else {
      txt?.setAttribute("style", "color:var(--grey);");
    }
  };

  return (
    <label class={cls([css.wrapper, p.err && css.wrapper_err, p.class])}>
      <input {...rest} type="file" class={css.input} title={p.err} onChange={handle_file} />
      <div class={css.txt}>{file()}</div>
    </label>
  );
}

type Props = ComponentProps<"input"> & {
  err?: string;
};
