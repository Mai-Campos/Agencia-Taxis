export const localePathname = (goTo: string) => {
  const currentPath = window.location.pathname
  const locale = currentPath.split('/')[1]
  const url = (window.location.href = `/${locale}/${goTo}`)

  return url
}
