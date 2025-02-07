import type { SidebarConfig } from 'vuepress'

export const sidebarFr: SidebarConfig =
{
  '/fr/welcome/':
    [
      {
        sidebarDepth: 0,
        text: 'Bienvenue',
        children: [
          '/fr/welcome/introduction.md',
          '/fr/welcome/getting-started.md',
          '/fr/welcome/portal-navigation.md',
          '/fr/welcome/author-explorer.md',
          '/fr/welcome/publication-explorer.md',
          '/fr/welcome/acknowledgments.md',
          '/fr/dfo/manuscript-record-form.md',
          '/fr/dfo/management-review-process.md',
          '/fr/dfo/publications.md',
          '/fr/third-party/manuscript-record-form.md',
          '/fr/third-party/management-review-process.md',
          '/fr/third-party/publications.md',
          '/fr/account/settings.md',
          '/fr/account/orcid.md',
          '/fr/account/troubleshooting.md',
          // '/fr/account/updates-and-version-history.md', //commented out until launch
          '/fr/account/appendices.md',
          '/fr/account/contact-support.md',
        ],
      }
    ],
  '/fr/third-party/':
    [
      {
        sidebarDepth: 0,
        text: 'Publication par un tiers',
        children: [
          '/fr/third-party/manuscript-record-form.md',
          '/fr/third-party/management-review-process.md',
          '/fr/third-party/publications.md',
        ],
      }
    ],

  '/fr/dfo/':
    [
      {
        sidebarDepth: 0,
        text: 'Publication du MPO',
        children: [
          '/fr/dfo/manuscript-record-form.md',
          '/fr/dfo/management-review-process.md',
          '/fr/dfo/publications.md',
        ],
      }
    ],

  '/fr/account/':
    [
      {
        sidebarDepth: 0,
        text: 'Paramètres et assistance',
        children: [
          '/fr/account/settings.md',
          '/fr/account/orcid.md',
          '/fr/account/troubleshooting.md',
          // '/fr/account/updates-and-version-history.md', //commented out until launch
          '/fr/account/appendices.md',
          '/fr/account/contact-support.md',
        ],
      }
    ]
}