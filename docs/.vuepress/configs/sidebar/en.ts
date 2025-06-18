import type { SidebarConfig } from 'vuepress'

export const sidebarEn: SidebarConfig =
{
  // Single unified guide structure
  '/en/':
    [
      {
        sidebarDepth: 1,
        text: 'Getting Started',
        children: [
          '/en/welcome/introduction.md',
          '/en/welcome/getting-started.md',
        ],
      },
      {
        sidebarDepth: 1,
        text: 'Portal Navigation & Features',
        children: [
          '/en/welcome/portal-navigation.md',
          '/en/welcome/author-explorer.md',
          '/en/welcome/publication-explorer.md',
        ],
      },
      {
        sidebarDepth: 1,
        text: 'Working with Publications',
        children: [
          '/en/user-guide/publications-overview.md',
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
        ],
      },
      {
        sidebarDepth: 1,
        text: 'Account Management',
        children: [
          '/en/account/settings.md',
          '/en/account/orcid.md',
        ],
      },
      {
        sidebarDepth: 1,
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