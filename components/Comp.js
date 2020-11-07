import { FormattedMessage } from "react-intl";
import { setRus, setEng } from "../effector/langsStore";
import Link from "next/link";
import { useTheme } from "next-themes";

function Comp() {
  const changeLangToRussian = () => {
    setRus();
    localStorage.setItem("locale", JSON.stringify("ru"));
  };
  const changeLangToEnglish = () => {
    setEng();
    localStorage.setItem("locale", JSON.stringify("en"));
  };

  const { theme, setTheme } = useTheme();

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
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </>
  );
}

export default Comp;
