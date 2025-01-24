import type { SidebarConfig } from 'vuepress'

export const sidebarEn: SidebarConfig =
{
  '/en/welcome/':
    [
      {
        sidebarDepth: 0,
        text: 'Welcome',
        children: [
          '/en/welcome/introduction.md',
          '/en/welcome/getting-started.md',
          '/en/welcome/portal-navigation.md',
          '/en/welcome/author-explorer.md',
          '/en/welcome/publication-explorer.md',
          '/en/welcome/acknowledgments.md',
          '/en/dfo/manuscript-record-form.md',
          '/en/dfo/management-review-process.md',
          '/en/dfo/publications.md',
          '/en/third-party/manuscript-record-form.md',
          '/en/third-party/management-review-process.md',
          '/en/third-party/publications.md',
          '/en/account/account-security.md',
          '/en/account/account-customization.md',
          '/en/account/orcid.md',
          '/en/account/troubleshooting.md',
          // '/en/account/updates-and-version-history.md', //commented out until launch
          '/en/account/appendices.md',
          '/en/account/contact-support.md',
        ],
      }
    ],

  '/en/dfo/':
    [
      {
        sidebarDepth: 0,
        text: 'DFO Publication',
        children: [
          '/en/dfo/manuscript-record-form.md',
          '/en/dfo/management-review-process.md',
          '/en/dfo/publications.md',
        ],
      }
    ],

  '/en/third-party/':
    [
      {
        sidebarDepth: 0,
        text: 'Third-Party Publication',
        children: [
          '/en/third-party/manuscript-record-form.md',
          '/en/third-party/management-review-process.md',
          '/en/third-party/publications.md',
        ],
      }
    ],

  '/en/account/':
    [
      {
        sidebarDepth: 0,
        text: 'Account and Support',
        children: [
          '/en/account/account-security.md',
          '/en/account/account-customization.md',
          '/en/account/orcid.md',
          '/en/account/troubleshooting.md',
          // '/en/account/updates-and-version-history.md', //commented out until launch
          '/en/account/appendices.md',
          '/en/account/contact-support.md',
        ],
      }
    ]
}