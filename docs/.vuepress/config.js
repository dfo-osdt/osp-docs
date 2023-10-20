import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
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
	    logo: '/logos/logo.png',
        locales:
        {
          '/':
          {
            selectLanguageName: 'English',
            navbar: 
            [
              // User Guide
              {
                text: 'User Guide',
                link: '/guide/introduction',
              },
              // OSP-PSO
              {
                text: 'OSP-PSO',
                link: 'https://osp-pso.ca/'
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
              // User Guide
              {
                text: 'Guide de l utilisateur',
                link: '/fr/guide/introduction',
              },
              // PSO-OSP
              {
                text: 'PSO-OSP',
                link: 'https://osp-pso.ca/'
              },
              // NavbarGroup
              {
                text: 'GitHub',
                children: [
                  {
                    text: 'Application PSO',
                    link: 'https://github.com/dfo-osdt/osp'
                  },
                  {
                    text: 'Documentation Utilisateur PSO',
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
      ),
      externalLinkIconPlugin
      (
        {
          locales:
          {
            '/':
            {
              externalLinkIconPlugin: false,
            },
            '/fr/':
            {
              externalLinkIconPlugin: false,
            },
          }
        }
      ),
    ]
  }
