import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
//import { path } from '@vuepress/utils'
//import { theme-default } from '@vuepress/theme-default'
//import { docsearchPlugin } from '@vuepress/plugin-docsearch'


export default
  {
    base: '/',

    locales: 
    {
      '/': 
      {
        lang: 'en-US',
        title: 'Open Science Portal',
        description: 'User documentation site for the Open Science Portal',
      },
      '/fr/':
      {
        lang: 'Français',
        title: 'Portail de la Science Ouverte',
        description: 'Site de documentation utilisateur pour le Portail de la Science Ouverte',
      },
    },
    theme: defaultTheme
    (
      {
        locales:
        {
          '/':
          {
            selectLanguageName: 'English',
            navbar: 
            [
              // NavbarItem
              {
                text: 'User Guide',
                link: '/guide/',
              },
              // NavbarGroup
              {
                text: 'GitHub',
                children: 
                [
                  {
                    text: 'OSP App',
                    link: 'https://github.com/dfo-osdt/osp'
                  },
                  {
                    text: 'OSP User Documentation',
                    link: 'https://github.com/dfo-osdt/osp-docs'
                  }
                ]
              },
            ],
            sidebar:
            {
              '/guide/':
              [
                {
                  text: 'Guide',
                  children: [
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
                },
              ]
            },
          },
          },
          '/fr/':
          {
            selectLangugaeName: 'Français',
            navbar: [
              // NavbarItem
              {
                text: 'Guide de l\'utilisateur',
                link: 'fr/guide/',
              },
              // NavbarGroup
              {
                text: 'GitHub',
                children: [
                  {
                    text: 'Application OSP',
                    link: 'https://github.com/dfo-osdt/osp'
                  },
                  {
                    text: 'Documentation Utilisateur OSP',
                    link: 'https://github.com/dfo-osdt/osp-docs'
                  }
                ]
              }
            ],
          }
        }
    ),
    plugins:
    [
      searchPlugin
      (
        {
          locales:
          {
            '/':
            {
              placeholder: 'Search',
            },
            '/fr/':
            {
              placeholder: 'Rechercher'
            }
          }
        }
      )
    ]
  }