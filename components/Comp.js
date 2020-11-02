import { useState } from "react";

import { FormattedMessage } from "react-intl";

function Comp() {
  //   const [language, setLanguage] = useState({
  //     locale: "en",
  //     messages: en,
  //   });
  return (
    <>
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
    </>
  );
}

export default Comp;
