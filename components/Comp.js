import { FormattedMessage } from "react-intl";
import { useEvent } from "effector-react/ssr";
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
      <Link href={"/ru"}>
        <button onClick={() => setRus()}>Rus</button>
      </Link>
      <Link href={"/en"}>
        <button onClick={() => setEng()}>Eng</button>
      </Link>
    </>
  );
}

export default Comp;
