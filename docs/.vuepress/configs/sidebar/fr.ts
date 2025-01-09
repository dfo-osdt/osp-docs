import type { SidebarConfig } from 'vuepress'

export const sidebarFr: SidebarConfig = 
{
        '/fr/welcome/':
          [
            {
              sidebarDepth: 0,
              text: 'Bienvenue',
              children: [
                '/fr/welcome/introduction.md',
                '/fr/welcome/getting-started.md',
                '/fr/welcome/portal-navigation.md',
		'/fr/welcome/my-manuscripts.md',
		'/fr/welcome/my-publications.md',
                '/fr/welcome/contact-support.md',
              ],
            }
          ],
        '/fr/third-party/':
          [
            {
              sidebarDepth: 0,
              text: 'Publication par un tiers',
              children: [
                '/fr/third-party/manuscript-record-form.md',
                '/fr/third-party/management-review-process.md',
                '/fr/third-party/publications.md',
              ],
            }
          ],
      
        '/fr/dfo/':
          [
            {
              sidebarDepth: 0,
              text: 'Publication du MPO',
              children: [
                '/fr/dfo/manuscript-record-form.md',
                '/fr/dfo/management-review-process.md',
                '/fr/dfo/publications.md',
              ],
            }
          ],
      
        '/fr/account/':
          [
            {
              sidebarDepth: 0,
              text: 'Paramètres du compte',
              children: [
                '/fr/account/account-security.md',
                '/fr/account/account-customization.md',
                '/fr/account/orcid.md',
                '/fr/account/explore.md',
                '/fr/account/troubleshooting.md',
                // '/fr/account/updates-and-version-history.md', //commented out until launch
                '/fr/account/appendices.md',
                '/fr/account/acknowledgments.md',
              ],
            }
          ]
      }