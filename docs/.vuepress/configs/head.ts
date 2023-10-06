import type { HeadConfig } from "@vuepress/core";

export const head: HeadConfig[] = 
[
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicons/favicon-16x16.png',
        },
    ],
    [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicons/favicon-32x32.png',
        },
    ],
    ['link', { rel: 'manifest', href: '/favicons/site.webmanifest' }],
    ['meta', { name: 'application-name', content: 'OSP-PSO' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'OSP-PSO' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/favicons/apple-touch-icon.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/favicons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
]