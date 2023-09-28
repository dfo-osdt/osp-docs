import type { SidebarConfig } from 'vuepress'

export const sidebarEn: SidebarConfig = 
{
    '/guide/':
              [
                {
                  text: 'Guide',
                  children: [
                    '/guide/introduction.md',
                    '/guide/getting-started.md',
                    '/guide/user-interface-overview.md',
                    '/guide/using-the-application.md',
                    '/guide/customization-and-security.md',
                    '/guide/advanced-features.md',
                    '/guide/troubleshooting.md',
                    '/guide/support-and-contact.md',
                    '/guide/updates-and-version-history.md',
                    '/guide/appendices.md',
                    '/guide/legal-and-compliance.md',
                    '/guide/acknowledgments.md',
                  ],
                }
              ]
}