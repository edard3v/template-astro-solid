import InputNumber from "@solid/components/inputs/InputNumber/InputNumber";
import css from "./Components.module.css";
import InputEmail from "@solid/components/inputs/InputEmail/InputEmail";
import InputPassword from "@solid/components/inputs/InputPassword/InputPassword";
import InputTel from "@solid/components/inputs/InputTel/InputTel";
import InputText from "@solid/components/inputs/InputText/InputText";
import InputDate from "@solid/components/inputs/InputDate/InputDate";
import TextArea from "@solid/components/inputs/TextArea/TextArea";
import InputFile from "@solid/components/inputs/InputFile/InputFile";
import Btn from "@solid/components/buttons/Btn/Btn";

export default function Components() {
  return (
    <div class={css.wrapper}>
      <form class={css.form} onsubmit={(e) => e.preventDefault()}>
        <InputText />
        <InputNumber />
        <InputEmail />
        <InputPassword />
        <InputTel />
        <InputDate />
        <TextArea />
        <InputFile />
        <Btn>Enviar</Btn>
      </form>
    </div>
  );
}
