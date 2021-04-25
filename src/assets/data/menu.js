export const navigationLinks = [
  {
    label: 'Prestations',
    route: {
      name: 'home',
      hash: '#prestations'
    }
  },
  {
    label: 'Espace Client',
    route: {
      name: 'clientArea'
    }
  },
  {
    label: 'Contact',
    action: 'contact/openModal',
    isModal: true
  },
  {
    label: 'A propos',
    sectionIndex: 4,
    route: {
      name: 'home',
      hash: '#a-propos'
    }
  }
]
