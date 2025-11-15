export async function getTranslations(literalsFolder: string, lang: string) {
  try {
    const translations = await import(`./${literalsFolder}/${lang}.json`)
    return translations.default
  } catch (error) {
    // Fallback al español si no existe el archivo
    const fallback = await import(`./${literalsFolder}/es.json`)
    return fallback.default
  }
}
