import type { SidebarOptions } from '@vuepress/theme-default';

export const sidebarFr: SidebarOptions =
{
  // Single unified guide structure
  '/fr/':
    [
      {
        text: 'Commencer',
        children: [
          '/fr/general/introduction.md',
          '/fr/general/getting-started.md',
        ],
      },
      {
        text: 'Navigation et fonctionnalités du portail',
        children: [
          '/fr/general/portal-navigation.md',
          '/fr/features/author-explorer.md',
          '/fr/features/publication-explorer.md',
          '/fr/general/orcid.md',
          '/fr/general/settings.md',
        ],
      },
      {
        text: 'Processus de publication',
        children: [
          '/fr/publication-process/manuscript-overview.md',
          '/fr/publication-process/manuscript-record-form.md',
          '/fr/publication-process/management-review-process.md',
          '/fr/publication-process/publications.md',
        ],
      },
      {
        text: 'Support et ressources',
        children: [
          '/fr/general/troubleshooting.md',
          '/fr/general/contact-support.md',
          '/fr/general/appendices.md',
        ],
      }
    ]
}