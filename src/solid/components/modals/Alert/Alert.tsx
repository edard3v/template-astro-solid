import css from "./Alert.module.css";
import Btn from "@solid/components/buttons/Btn/Btn";
import { splitProps, type ComponentProps } from "solid-js";
import { cls } from "@utils/cls";

export default function Alert(props: Props) {
  const [p, rest] = splitProps(props, ["class", "msg", "msg_btn", "on_click_btn"]);

  return (
    <dialog {...rest} class={cls([css.modal, p.class])}>
      <div>{p.msg}</div>

      <form>
        <Btn formmethod="dialog" onclick={p.on_click_btn}>
          {p.msg_btn ?? "Ok"}
        </Btn>
      </form>
    </dialog>
  );
}

type Props = ComponentProps<"dialog"> & {
  msg: string;
  msg_btn?: string;
  on_click_btn?: () => void;
};
