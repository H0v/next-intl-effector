import { IntlProvider } from "react-intl";
import Comp from "../components/Comp";
import { useStore } from "effector-react";
import { $langStore } from "../effector/langsStore";

export default function Index() {
  // const changeSumEvent = useEvent(changeSum);
  const language = useStore($langStore);

  return (
    <div>
      <IntlProvider locale={language.locale} messages={language.message}>
        <Comp />
      </IntlProvider>
    </div>
  );
}
