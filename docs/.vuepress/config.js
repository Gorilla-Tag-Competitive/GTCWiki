import { containerPlugin } from '@vuepress/plugin-container';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { path } from '@vuepress/utils';
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  base: '/GTCWiki/',

  title: 'Gorilla Tag Comp Wiki',
  description: 'A wiki for GTC',

  theme: defaultTheme({
    docsDir: 'wiki',
    docsBranch: 'master',
    editLink: false,
    contributors: false,

    locales: {
       '/': {
          selectLanguageText: '🌐 English',
          selectLanguageName: 'English',
          selectLanguageAriaLabel: 'Languages',
          editLinkText: 'Help improve this page!',
          lastUpdatedText: 'Last Updated',
          navbar: [
             { text: 'Home', link: '/' },
             { text: 'GTC', link: 'https://gorillatagcomp.com/' },
             { text: 'GTC Discord', link: 'https://discord.gg/gorillatagcomp' },
          ],
       },
    },
  }),

  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'theme-color', content: '#157EE0' }],
 ],

  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, 'components'),
    }),
    mediumZoomPlugin({
      zoomOptions: {
          margin: 16,
      },
    }),
    containerPlugin({
      type: 'feature',
      before: (info) => `<div class="feature"><h2 style="pointer-events: none;">${info}</h2>`,
      after: () => '</div>',
    }),
    containerPlugin({
      type: 'align',
      before: (align) => `<div align="${align}">`,
      after: () => '</div>',
    }),
  ],

  bundler: viteBundler({
    viteOptions: {
       resolve: {
          alias: {
             '@images': path.resolve(__dirname, '../.assets/images'),
          },
       },
    },
  }),
})
