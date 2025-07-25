import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
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
          contributors: false,
          locales:
          {
            '/':
            {
              selectLanguageName: 'English',
              navbar:
                [
                  {
                    text: 'User Guide',
                    link: '/en/welcome/introduction.html'
                  },
                  {
                    text: 'OSP-PSO',
                    link: 'https://osp-pso.ent.dfo-mpo.ca/'
                  },
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
              sidebar: sidebarEn,
            },
            '/fr/':
            {
              selectLanguageName: 'Français',
              navbar: [
                {
                  text: 'Guide d\'utilisation',
                  link: '/fr/welcome/introduction.html'
                },
                {
                  text: 'OSP-PSO',
                  link: 'https://osp-pso.ent.dfo-mpo.ca/'
                },
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
