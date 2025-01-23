import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
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

    port: 3000,

    locales:
    {
      '/':
      {
        lang: 'en-US',
        title: 'EOS-OSP Docs',
        description: 'User documentation site for the Open Science Portal',
      },
      '/fr/':
      {
        lang: 'Français',
        title: 'SEO-PSO Docs',
        description: 'Site de documentation utilisateur pour le Portail de la Science Ouverte',
      },
    },
    bundler: viteBundler({
      viteOptions: {},
      vuePluginOptions: {},
    }),
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
                  // User Guide Group
                  {
                    text: 'User Guides',
                    children:
                      [
                        {
                          text: 'Welcome',
                          link: '/en/welcome/introduction.html'
                        },
                        {
                          text: 'DFO Publication',
                          link: '/en/dfo/manuscript-record-form.html'
                        },
			{
                          text: 'Third-Party Publication',
                          link: '/en/third-party/manuscript-record-form.html'
                        },
                        {
                          text: 'Account Settings',
                          link: '/en/account/account-security.html'
                        },
                      ]
                  },
                  // OSP-PSO
                  {
                    text: 'OSP-PSO',
                    link: 'https://osp-pso.ent.dfo-mpo.ca/'
                  },
                  // NavbarGroup
                  {
                    text: 'GitHub',
                    children:
                      [
                        {
                          text: 'OSP Application',
                          link: 'https://github.com/dfo-osdt/osp'
                        },
                        {
                          text: 'OSP User Documentation',
                          link: 'https://github.com/dfo-osdt/osp-docs'
                        }
                      ]
                  },
                ],
              // Apply sidebar configs
              sidebar: sidebarEn,
              // Set number of sidebar children 0:none, 1:h2, 2:h3
              sidebarDepth: 1,
            },

            '/fr/':
            {
              selectLanguageName: 'Français',
              navbar: [
                // User Guide Group
                {
                  text: 'Guides d\'utilisation',
                  children:
                    [
                      {
                        text: 'Bienvenue',
                        link: '/fr/welcome/introduction.html'
                      },
                      {
                        text: 'Publication du MPO',
                        link: '/fr/dfo/manuscript-record-form.html'
                      },
		      {
                        text: 'Publication par un tiers',
                        link: '/fr/third-party/manuscript-record-form.html'
                      },
                      {
                        text: 'Paramètres du compte',
                        link: '/fr/account/account-security.html'
                      },
                    ]
                },
                // PSO-OSP
                {
                  text: 'PSO-OSP',
                  link: 'https://osp-pso.ent.dfo-mpo.ca/'
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
              // Load sidebar config
              sidebar: sidebarFr,
              // Set number of children 0:none, 1:h2, 2:h3
              sidebarDepth: 1,
            }
          },
        }
      ),
    plugins:
      [
        searchPlugin
          ({
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
          }),
      ]
  }
