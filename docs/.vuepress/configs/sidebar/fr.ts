import type { SidebarConfig } from 'vuepress'

export const sidebarFr: SidebarConfig = 
{
  '/fr/guide/':
            [
              {
                text: 'Guide',
                children: [
                  '/fr/guide/introduction.md',
                  '/fr/guide/getting-started.md',
                  '/fr/guide/user-interface-overview.md',
                  '/fr/guide/using-the-application.md',
                  '/fr/guide/customization-and-security.md',
                  '/fr/guide/advanced-features.md',
                  '/fr/guide/troubleshooting.md',
                  '/fr/guide/support-and-contact.md',
                  '/fr/guide/updates-and-version-history.md',
                  '/fr/guide/appendices.md',
                  '/fr/guide/acknowledgments.md',
                ],
              }
            ]
}