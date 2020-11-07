import { FormattedMessage } from "react-intl";
import { setRus, setEng } from "../effector/langsStore";
import Link from "next/link";

function Comp() {
  const changeLangToRussian = () => {
    setRus();
    localStorage.setItem("locale", JSON.stringify("ru"));
  };
  const changeLangToEnglish = () => {
    setEng();
    localStorage.setItem("locale", JSON.stringify("en"));
  };
  return (
    <>
      <FormattedMessage
        id="title"
        // defaultMessage="Learn React"
        // description="Link on react page"
        values={{ test: "Artem" }}
      />
      <Link href="/" locale="ru">
        <button onClick={() => changeLangToRussian()}>Rus</button>
      </Link>
      <Link href="/en" locale="en">
        <button onClick={() => changeLangToEnglish()}>Eng</button>
      </Link>

      <Link href="/about">
        <button>Go ABOUT</button>
      </Link>
    </>
  );
}

export default Comp;
