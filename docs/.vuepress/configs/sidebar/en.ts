import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarEn: SidebarOptions =
{
  // Single unified guide structure
  '/en/':
    [
      {
        text: 'Getting Started',
        children: [
          '/en/general/introduction.md',
          '/en/general/getting-started.md',
        ],
      },
      {
        text: 'Portal Features',
        children: [
          '/en/general/portal-navigation.md',
          '/en/features/author-explorer.md',
          '/en/features/publication-explorer.md',
          '/en/general/orcid.md',
          '/en/general/settings.md',
        ],
      },
      {
        text: 'Publishing Process',
        children: [
          '/en/publication-process/manuscript-overview.md',
          '/en/publication-process/manuscript-record-form.md',
          '/en/publication-process/management-review-process.md',
          '/en/publication-process/publications.md',
        ],
      },
      {
        text: 'Support & Resources',
        children: [
          '/en/general/troubleshooting.md',
          '/en/general/contact-support.md',
          '/en/general/appendices.md',
        ],
      }
    ]
}