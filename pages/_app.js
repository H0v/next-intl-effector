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
import "@formatjs/intl-datetimeformat/locale-data/en.js";
import "@formatjs/intl-datetimeformat/add-all-tz";

//xz

import { useStore } from "effector-react";
import { ThemeProvider } from "next-themes";
import { $langStore, setEng, setRus } from "../effector/langsStore";
import { Provider } from "effector-react/ssr";
import { fork, serialize } from "effector";
import { appDomain } from "../effector/appDomain";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  const attachLogger = require("effector-logger/attach").attachLogger;
  attachLogger(appDomain, {
    reduxDevtools: "enabled",
    console: "enabled",
    inspector: "disabled",
  });
}

let currentScope;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const lang = JSON.parse(localStorage.getItem("locale"));
    lang === "en" && setEng();
  }, []);

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
      <ThemeProvider
        themes={["light", "dark"]}
        disableTransitionOnChange
        enableSystem={false}
        defaultTheme="light"
      >
        <IntlProvider locale={language.locale} messages={language.message}>
          <Component {...pageProps} />
        </IntlProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
