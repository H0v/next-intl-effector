import { FormattedMessage } from "react-intl";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <FormattedMessage id="about" />
      <Link href="/">
        <button>Go back</button>
      </Link>
    </div>
  );
}
