import { defineAstroI18nConfig } from "astro-i18n"

export default defineAstroI18nConfig({
	primaryLocale: "es", // default app locale
	secondaryLocales: ["en", "ru"], // other supported locales
	fallbackLocale: "es", // fallback locale (on missing translation)
	trailingSlash: "never", // "never" or "always"
	run: "client+server", // "client+server" or "server"
	showPrimaryLocale: true, // "/en/about" vs "/about"
	translationLoadingRules: [], // per page group loading
	translationDirectory: {i18n: "src/i18n"}, // translation directory names
	translations: {}, // { [translation_group1]: { [locale1]: {}, ... } }
	routes: {}, // { [secondary_locale1]: { about: "about-translated", ... } }
})