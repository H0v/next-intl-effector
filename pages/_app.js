import "../styles/globals.css";
import { IntlProvider } from "react-intl";

//PluralRules
import "@formatjs/intl-pluralrules/polyfill";
import "@formatjs/intl-pluralrules/locale-data/ru";
import "@formatjs/intl-pluralrules/locale-data/en";

//Numberformats
import "@formatjs/intl-numberformat/polyfill";
import "@formatjs/intl-numberformat/locale-data/ru";
import "@formatjs/intl-numberformat/locale-data/en";

//DateTimeFormats
import "@formatjs/intl-datetimeformat/polyfill-force";
import "@formatjs/intl-datetimeformat/locale-data/ru.js";
import "@formatjs/intl-datetimeformat/add-all-tz";

import { useStore } from "effector-react";
import { $langStore } from "../effector/langsStore";
import { Provider } from "effector-react/ssr";
import { fork, serialize } from "effector";
import { appDomain } from "../effector/appDomain";

if (typeof window !== "undefined") {
  // Temporary dynamic import
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const attachLogger = require("effector-logger/attach").attachLogger;
  attachLogger(appDomain, {
    reduxDevtools: "enabled",
    console: "enabled",
    inspector: "disabled",
  });
}

let currentScope;

function MyApp({ Component, pageProps }) {
  const language = useStore($langStore);

  let scope;
  if (typeof window !== "undefined") {
    let values;
    if (currentScope) {
      values = serialize(currentScope, { onlyChanges: true });
    }
    scope = fork(appDomain, { values });
    currentScope = scope;
  } else {
    scope = fork(appDomain);
  }

  return (
    <Provider value={scope}>
      <IntlProvider
        onError={(e) => console.log(e)}
        defaultLocale={language.locale}
        locale={language.locale}
        messages={language.message}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </Provider>
  );
}

export default MyApp;
