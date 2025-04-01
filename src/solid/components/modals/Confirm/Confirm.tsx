import css from "./Confirm.module.css";
import Btn from "@solid/components/buttons/Btn/Btn";
import { splitProps, type ComponentProps } from "solid-js";
import { cls } from "@utils/cls";

export default function Confirm(props: Props) {
  const [p, rest] = splitProps(props, [
    "class",
    "msg",
    "msg_btn_left",
    "msg_btn_right",
    "on_click_btn_left",
    "on_click_btn_right",
  ]);

  return (
    <dialog {...rest} class={cls([css.modal, p.class])}>
      <div>{p.msg}</div>

      <div class={css.wrapper_btns}>
        <form>
          <Btn formmethod="dialog" onclick={p.on_click_btn_left}>
            {p.msg_btn_left ?? "Confirmar"}
          </Btn>
        </form>

        <form>
          <Btn formmethod="dialog" onclick={p.on_click_btn_right}>
            {p.msg_btn_left ?? "Cancelar"}
          </Btn>
        </form>
      </div>
    </dialog>
  );
}

type Props = ComponentProps<"dialog"> & {
  msg: string;
  msg_btn_left?: string;
  msg_btn_right?: string;
  on_click_btn_left?: () => void;
  on_click_btn_right?: () => void;
};
