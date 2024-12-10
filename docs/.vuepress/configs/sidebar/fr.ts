import type { SidebarConfig } from 'vuepress'

export const sidebarFr: SidebarConfig = 
{
  '/fr/guide/':
            [
              {
                text: 'Guide',
                children: [
		'introduction.md',
                'getting-started.md',
                'portal-navigation.md',
		'manuscript-record-form.md',
		'management-review-process.md',
		'publications.md',
                'account-security.md',
		'account-customization.md',
                'orcid.md',
		'explore.md',
                'troubleshooting.md',
                'contact-support.md',
//                'updates-and-version-history.md', // comment out until launch
                'appendices.md',
                'acknowledgments.md',
                ],
              }
            ]
}