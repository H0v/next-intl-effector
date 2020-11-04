import { appDomain } from "./appDomain";
import en from "../public/static/locales/en/translate.json";
import ru from "../public/static/locales/ru/translate.json";

export const $langStore = appDomain.createStore({
  locale: "ru",
  message: ru,
});

export const setRus = appDomain.createEvent();
export const setEng = appDomain.createEvent();

$langStore
  .on(setRus, () => ({
    locale: "ru",
    message: ru,
  }))
  .on(setEng, () => ({
    locale: "en",
    message: en,
  }));
