import type { SidebarConfig } from 'vuepress'

export const sidebarEn: SidebarConfig = 
{
    '/guide/':
              [
                {
		sidebarDepth: 0,
                  text: 'Guide',		 
                  children: [
                    '/guide/introduction.md',
                    '/guide/getting-started.md',
                    '/guide/portal-navigation.md',
		    '/guide/manuscript-record-form.md',
		    '/guide/management-review-process.md',
		    '/guide/publications.md',
                    '/guide/account-security.md',
		    '/guide/account-customization.md',
                    '/guide/orcid.md',
                    '/guide/troubleshooting.md',
                    '/guide/contact-support.md',
                    '/guide/updates-and-version-history.md',
                    '/guide/appendices.md',
                    '/guide/acknowledgments.md',
                  ],
                }
              ]
}