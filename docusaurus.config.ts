import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Open Science Portal User Guide',
  tagline: 'Complete documentation for researchers, authors, and managers',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://osp-pso-docs.ent.dfo-mpo.ca/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dfo-osdt', // Usually your GitHub org/user name.
  projectName: 'osp-pso', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  staticDirectories: ['static', 'src'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dfo-osdt/osp-docs/tree/main/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/osp_social_card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'OSP-PSO Docs',
      logo: {
        alt: 'OSP-PSO Docs Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://osp-pso.ent.dfo-mpo.ca/#/',
          position: 'left',
          label: 'OSP-PSO',
        },  
        {
          type: 'localeDropdown',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'OSP',
          items: [
            {
              label: 'OSP',
              href: 'https://osp-pso.ent.dfo-mpo.ca/#/',
            },
            {
              label: 'Documentation',
              to: 'docs/intro',
            },
          ],
        },
        {
          title: 'Contact Us',
          items: [
            {
              label: 'Open Science Team',
              href: 'mailto:DFO.OpenScience-ScienceOuverte.MPO@dfo-mpo.gc.ca',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'OSP',
              href: 'https://github.com/dfo-osdt/osp',
            },
            {
              label: 'OSP-PSO Docs',
              href: 'https://github.com/dfo-osdt/osp-docs',
            },
          ],
        },
      ],
      copyright: ` `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
