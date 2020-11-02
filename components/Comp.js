import { useState } from "react";
import { IntlProvider } from "react-intl";
import { FormattedMessage } from "react-intl";
import en from "../public/static/locales/en/translate.json";
import ru from "../public/static/locales/ru/translate.json";

function Comp() {
  const [language, setLanguage] = useState({
    locale: "en",
    messages: en,
  });
  return (
    <>
      <IntlProvider locale={language.locale} messages={language.messages}>
        <main>
          <FormattedMessage
            id="title"
            // defaultMessage="Learn React"
            // description="Link on react page"
            values={{ test: "posmotrim blyaty" }}
          />

          <button
            onClick={() =>
              setLanguage({
                locale: "ru",
                messages: ru,
              })
            }
          >
            Rus
          </button>
          <button
            onClick={() =>
              setLanguage({
                locale: "en",
                messages: en,
              })
            }
          >
            Eng
          </button>
        </main>
      </IntlProvider>
    </>
  );
}

export default Comp;
