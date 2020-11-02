import "../styles/globals.css";
import { IntlProvider } from "react-intl";
import en from "../public/static/locales/en/translate.json";
import ru from "../public/static/locales/ru/translate.json";



function MyApp({ Component, pageProps }) {
  return (
    <IntlProvider locale="en" messages={en}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
