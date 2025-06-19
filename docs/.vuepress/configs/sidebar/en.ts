import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarEn: SidebarOptions =
{
  // Single unified guide structure
  '/en/':
    [
      {
        text: 'Getting Started',
        children: [
          '/en/welcome/introduction.md',
          '/en/welcome/getting-started.md',
        ],
      },
      {
        text: 'Portal Navigation & Features',
        children: [
          '/en/welcome/portal-navigation.md',
          '/en/welcome/author-explorer.md',
          '/en/welcome/publication-explorer.md',
          '/en/welcome/settings.md',
          '/en/welcome/orcid.md',
        ],
      },
      {
        text: 'Working with Publications',
        children: [
          '/en/user-guide/publications-overview.md',
          '/en/user-guide/management-review-overview.md',
          {
            text: 'DFO Publications',
            children: [
              '/en/dfo/manuscript-record-form.md',
              '/en/dfo/management-review-process.md',
              '/en/dfo/publications.md',
            ],
          },
          {
            text: 'Third-Party Publications',
            children: [
              '/en/third-party/manuscript-record-form.md',
              '/en/third-party/management-review-process.md',
              '/en/third-party/publications.md',
            ],
          },
          {
            text: 'Preprint Publications',
            children: [
              '/en/preprint/manuscript-record-form.md',
              '/en/preprint/management-review-process.md',
              '/en/preprint/publications.md',
            ],
          },
        ],
      },
      {
        text: 'Support & Resources',
        children: [
          '/en/account/troubleshooting.md',
          '/en/account/contact-support.md',
          '/en/account/appendices.md',
          '/en/welcome/acknowledgments.md',
        ],
      }
    ]
}