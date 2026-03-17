import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { path } from "vuepress/utils";
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
      '/en/':
      {
        lang: 'en-US',
        title: 'EOS-OSP Docs',
        description: 'User documentation site for the Open Science Portal',
      },
      '/fr/':
      {
        lang: 'fr-CA',
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
            '/en/':
            {
              selectLanguageName: 'English',
              navbar:
                [
                  {
                    text: 'User Guide',
                    link: '/en/general/introduction.html'
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
                docsRepo: 'https://github.com/dfo-osdt/osp-docs',
                docsDir: 'docs',
            },
            '/fr/':
            {
              selectLanguageName: 'Français',
              navbar: [
                {
                  text: 'Guide d\'utilisation',
                  link: '/fr/general/introduction.html'
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
                docsRepo: 'https://github.com/dfo-osdt/osp-docs',
                docsDir: 'docs',
                editLinkText: 'Modifier cette page',
            }
          },
        }
      ),
    plugins:
      [
          registerComponentsPlugin({
              componentsDir: path.resolve(__dirname, "./components"),
          }),
        searchPlugin
          ({
              maxSuggestions: 10,
          }),
      ]
  }
