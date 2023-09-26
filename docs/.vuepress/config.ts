import { defineUserConfig } from 'vuepress'
import pkg from '@vuepress/theme-default';
const { defaultTheme } = pkg;

export default defineUserConfig( 
{
  title: 'Open Science Portal',
  description: 'Welcome to the user documentation site for the EOS Open Science Portal',
  themeConfig: 
  {
    logo: '/logos/logo.png',
    // i18next configuration for English and French pages
    // English (Default)
    '/': 
    {
      selectText: 'Languages',
      label: 'English',
      editLinkText: 'GitHub',
      serviceWorker: 
      {
        updatePopup: 
        {
          message: "New content is available.",
          buttonText: "Refresh"
        }
      },
      algolia: {},
      nav:
      [
        {
          text: 'Guide', 
          link: '/guide/', 
          ariaLabel: 'Guide'
        },
        {
          text: 'GitHub',
          items:
          [
            {
              text: 'OSP',
              link: 'https://github.com/dfo-osdt/osp',
              target: '_self',
              rel: false,
            },
            {
              text: 'OSP Docs',
              link: 'https://github.com/dfo-osdt/osp-docs',
              target: '_self',
              rel: false,
            }
          ]
        },
      ],
      sidebar: 
      {
        '/': 
        [
          /*...*/
        ],
        '/guide/': 
        [
          /*...*/
        ]
      }
    },
    // French
    '/fr/': 
    {
      selectedText: 'Langues',
      label: 'Français',
      editLinkText: 'GitHub',
      serviceWorker: 
      {
        updatePopup: 
        {
          message: "Du nouveau contenu est disponible.",
          buttonText: "Rafraîchir"
        }
      },
      algolia: {},
      nav: 
      [
        {
          text: 'Guide',
          link: '/guide/',
          ariaLabel: 'Guide'
        },
        {
          text: 'GitHub',
          items:
          [
            {
              text: 'OSP',
              link: 'https://github.com/dfo-osdt/osp',
              target: '_self',
              rel: false,
            },
            {
              text: 'OSP Docs',
              link: 'https://github.com/dfo-osdt/osp-docs',
              target: '_self',
              rel: false,
            }
          ]
        },
      ],
      sidebar: 
      {
        '/': 
        [
          /*...*/
        ],
        '/guide/': 
        [
          /*...*/
        ]
      }
    }
  }

}
)