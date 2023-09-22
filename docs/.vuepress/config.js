module.exports = {
  title: 'Open Science Portal',
  description: 'Welcome to the user documentation site for the EOS Open Science Portal',
  themeConfig: {
    // i18next configuration for English and French pages
    // English (Default)
    '/': {
      selectText: 'Languages',
      label: 'English',
      editLinkText: 'GitHub',
      serviceWorker: {
        updatePopup: {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      },
      algolia: {},
      nav: [
        {logo: '/logos/logo.png', text: 'Guide', link: '/guide/', ariaLabel: 'Guide'}
      ],
      sidebar: {
        '/': [/*...*/],
        '/guide/': [/*...*/]
      }
    },
    // French
    '/fr/': {
      selectedText: 'Langues',
      label: 'Français',
      editLinkText: 'GitHub',
      serviceWorker: {
        updatePopup: {
          message: "Du nouveau contenu est disponible.",
          buttonText: "Rafraîchir"
        }
      },
      algolia: {},
      nav: [
        {logo: '/logos/logo.png', text: 'Guide', link: '/guide/', ariaLabel: 'Guide'}
      ],
      sidebar: {
        '/': [/*...*/],
        '/guide/': [/*...*/]
      }
    }
  }

}