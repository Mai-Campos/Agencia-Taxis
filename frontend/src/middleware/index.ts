import { sequence } from "astro/middleware"
import { useAstroI18n } from "astro-i18n"
import astroI18nConfig from "../../astro-i18n.config"

const astroI18n = useAstroI18n(
	astroI18nConfig,
	undefined /* custom formatters */,
)

export const onRequest = sequence(astroI18n)