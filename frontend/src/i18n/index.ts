export async function getTranslations(page: string, locale: string) {
  try {
    const translations = await import(`./${page}/${locale}.json`);
    return translations.default;
  } catch (error) {
    // Fallback al español si no existe el archivo
    const fallback = await import(`./${page}/es.json`);
    return fallback.default;
  }
}