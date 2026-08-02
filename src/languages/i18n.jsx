const LANG_IMPORTS = {
  tr: () => import("./tr.json"),
  en: () => import("./en.json"),
};

const dictionaries = {};

let currentDictionary = null;
let currentLanguage = getInitialLanguage();

function getBrowserLanguage() {
  if (typeof navigator === "undefined") return "tr";

  return navigator.language.toLowerCase();
}

function resolveLanguage(lang = "") {
  const language = lang.toLowerCase().replace("_", "-");
  const short = language.split("-")[0];

  if (LANG_IMPORTS[language]) return language;
  if (LANG_IMPORTS[short]) return short;

  return "tr";
}

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("language");

  if (savedLanguage) {
    return resolveLanguage(savedLanguage);
  }

  return resolveLanguage(getBrowserLanguage());
}

async function loadDictionary(language) {
  const key = resolveLanguage(language);

  if (dictionaries[key]) {
    return dictionaries[key];
  }

  const module = await LANG_IMPORTS[key]();

  dictionaries[key] = module.default;

  return dictionaries[key];
}

export async function initI18n() {
  currentDictionary = await loadDictionary(currentLanguage);

  return currentDictionary;
}

export async function setLanguage(language) {
  currentLanguage = resolveLanguage(language);

  localStorage.setItem("language", currentLanguage);

  currentDictionary = await loadDictionary(currentLanguage);

  window.dispatchEvent(
    new CustomEvent("languageChanged", {
      detail: currentLanguage,
    })
  );

  return currentDictionary;
}

export function getLanguage() {
  return currentLanguage;
}

function getNestedValue(object, path) {
  return path
    .split(".")
    .reduce((result, key) => (result ? result[key] : undefined), object);
}

export function _(key, params = {}) {
  if (!currentDictionary) return key;

  const value = getNestedValue(currentDictionary, key);

  if (typeof value !== "string") {
    return key;
  }

  return Object.entries(params).reduce(
    (text, [paramKey, paramValue]) =>
      text.replaceAll(`{${paramKey}}`, String(paramValue)),
    value
  );
}