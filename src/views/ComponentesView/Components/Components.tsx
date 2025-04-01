import css from "./Components.module.css";
import InputEmail from "@solid/components/inputs/InputEmail/InputEmail";

export default function Components() {
  return (
    <div class={css.wrapper}>
      <form>
        <InputEmail />
      </form>
    </div>
  );
}
