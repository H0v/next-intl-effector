import "../styles/globals.css";

import { Provider } from "effector-react/ssr";
import { fork, serialize, Scope } from "effector";
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
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
