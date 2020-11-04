import { FormattedMessage } from "react-intl";
import { setRus, setEng } from "../effector/langsStore";
import Link from "next/link";

function Comp() {
  return (
    <>
      <FormattedMessage
        id="title"
        // defaultMessage="Learn React"
        // description="Link on react page"
        values={{ test: "Artem" }}
      />
      <Link href="/" locale="ru">
        <button onClick={() => setRus()}>Rus</button>
      </Link>
      <Link href="/en" locale="en">
        <button onClick={() => setEng()}>Eng</button>
      </Link>

      <Link href="/about">
        <button>Go ABOUT</button>
      </Link>
    </>
  );
}

export default Comp;
