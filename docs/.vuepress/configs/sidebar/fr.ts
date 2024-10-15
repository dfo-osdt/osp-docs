import type { SidebarConfig } from 'vuepress'

export const sidebarFr: SidebarConfig = 
{
  '/fr/guide/':
            [
              {
                text: 'Guide',
                children: [
		'/guide/fr/introduction.md',
                '/guide/fr/getting-started.md',
                '/guide/fr/portal-navigation.md',
		'/guide/fr/manuscript-record-form.md',
		'/guide/fr/management-review-process.md',
		'/guide/fr/publications.md',
                '/guide/fr/account-security.md',
		'/guide/fr/account-customization.md',
                '/guide/fr/orcid.md',
                '/guide/fr/troubleshooting.md',
                '/guide/fr/contact-support.md',
                '/guide/fr/updates-and-version-history.md',
                '/guide/fr/appendices.md',
                '/guide/fr/acknowledgments.md',
                ],
              }
            ]
}