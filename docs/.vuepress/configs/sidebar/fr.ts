import type { SidebarConfig } from 'vuepress'

export const sidebarFr: SidebarConfig =
{
  // Single unified guide structure
  '/fr/':
    [
      {
        sidebarDepth: 1,
        text: 'Commencer',
        children: [
          '/fr/welcome/introduction.md',
          '/fr/welcome/getting-started.md',
        ],
      },
      {
        sidebarDepth: 1,
        text: 'Navigation et fonctionnalités du portail',
        children: [
          '/fr/welcome/portal-navigation.md',
          '/fr/welcome/author-explorer.md',
          '/fr/welcome/publication-explorer.md',
          '/fr/welcome/settings.md',
          '/fr/welcome/orcid.md',
        ],
      },
      {
        sidebarDepth: 1,
        text: 'Travailler avec les publications',
        children: [
          '/fr/user-guide/publications-overview.md',
          '/fr/user-guide/management-review-overview.md',
          {
            text: 'Publications du MPO',
            children: [
              '/fr/dfo/manuscript-record-form.md',
              '/fr/dfo/management-review-process.md',
              '/fr/dfo/publications.md',
            ],
          },
          {
            text: 'Publications par un tiers',
            children: [
              '/fr/third-party/manuscript-record-form.md',
              '/fr/third-party/management-review-process.md',
              '/fr/third-party/publications.md',
            ],
          },
          {
            text: 'Publications en prépublication',
            children: [
              '/fr/preprint/manuscript-record-form.md',
              '/fr/preprint/management-review-process.md',
              '/fr/preprint/publications.md',
            ],
          },
        ],
      },
      {
        sidebarDepth: 1,
        text: 'Support et ressources',
        children: [
          '/fr/account/troubleshooting.md',
          '/fr/account/contact-support.md',
          '/fr/account/appendices.md',
          '/fr/welcome/acknowledgments.md',
        ],
      }
    ]
}