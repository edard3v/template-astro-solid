import InputNumber from "@solid/components/inputs/InputNumber/InputNumber";
import css from "./Components.module.css";
import InputEmail from "@solid/components/inputs/InputEmail/InputEmail";
import InputPassword from "@solid/components/inputs/InputPassword/InputPassword";
import InputTel from "@solid/components/inputs/InputTel/InputTel";

export default function Components() {
  return (
    <div class={css.wrapper}>
      <form class={css.form}>
        <InputEmail />
        <InputNumber />
        <InputPassword />
        <InputTel />
      </form>
    </div>
  );
}
