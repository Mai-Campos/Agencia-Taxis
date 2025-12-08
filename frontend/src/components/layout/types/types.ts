export type NavBarTranslations = {
  language: string
  services: string
  travels: string
  checkBooking: string
}

export type FooterProps = {
  brand: {
    name: string
    description: string
  }
  links: {
    title: string
    services: string
    trips: string
    checkBook: string
  }
  contact: {
    title: string
  }
  legal: {
    copyright: string
  }
}
