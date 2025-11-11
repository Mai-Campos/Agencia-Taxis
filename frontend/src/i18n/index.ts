export async function getTranslations(page: string, locale: string) {
  try {
    const translations = await import(
      new URL(`./${page}/${locale}.json`, import.meta.url).href
    )
    return translations.default
  } catch (error) {
    // Fallback al español si no existe el archivo
    const fallback = await import(
      new URL(`./${page}/${locale}.json`, import.meta.url).href
    )
    return fallback.default
  }
}
