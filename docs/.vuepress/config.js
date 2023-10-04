import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import {
  head,
  sidebarEn, 
  sidebarFr,
} from './configs/index.js'

export default
  {
    base: '/',

    head,

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
                link: '/guide/introduction',
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
            sidebar: sidebarEn,
          },
        
          '/fr/':
          {
            selectLangugaeName: 'Français',
            navbar: [
              // NavbarItem
              {
                text: 'Guide de l utilisateur',
                link: '/fr/guide/introduction',
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
            sidebar: sidebarFr,
          }
        },
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
              placeholder: 'Rechercher',
            }
          }
        }
      )
    ]
  }