// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'seeker文档',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://jintanzhen.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jintanzhen', // Usually your GitHub org/user name.
  projectName: 'jintanzhen.github.io', // Usually your repo name.
  deploymentBranch:"main", // 指定远程仓库的分支
  

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '产品文档',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/dataease',
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'SeekerDataEase',
          },
          { to: '/blog',
            label: 'Blog', 
            position: 'left'
          },
          {
            href: 'https://github.com/jintanzhen/jintanzhen.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: { 
        style: 'dark',
        // links: [
        //   {
        //     title: '文档',
        //     items: [
        //       {
        //         label: '报告',
        //         to: '/docs/report-intro',
        //       },
        //       {
        //         label: '简历',
        //         href: 'https://gitee.com/jintanzhen/analysis-report/raw/master/%E6%95%B0%E6%8D%AE%E5%BC%80%E5%8F%91_%E7%BB%9F%E8%AE%A1%E5%AD%A6_%E9%87%91%E9%93%B6(v2.0).pdf',
        //       },
        //     ],
        //   },
        //   {
        //     title: '社交网络',
        //     items: [
        //       {
        //         label: '知乎',
        //         href: 'https://www.zhihu.com/people/jintanzhen',
        //       },
        //       // {
        //       //   label: 'Discord',
        //       //   href: 'https://discordapp.com/invite/docusaurus',
        //       // },
        //       {
        //         label: 'bilibili',
        //         href: 'https://space.bilibili.com/518945527',
        //       },
        //     ],
        //   },
        //   {
        //     title: '更多',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} 金银. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
