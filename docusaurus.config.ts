import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ekobelens API Documentation',
  tagline: 'Comprehensive API documentation for the Ekobelens platform',
  favicon: 'img/ekobelens-favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ekobelens-labs', // Usually your GitHub org/user name.
  projectName: 'ekobelens-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Link to edit this page - points to the public docs repo
          editUrl: 'https://github.com/ekobelens-labs/ekobelens-docs/tree/main/',
          docRootComponent: "@theme/DocRoot",
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          ekobelens: {
            specPath: "specs/swagger.yaml",
            outputDir: "docs/api/generated",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        },
      },
    ],
  ],

  themeConfig: {
    // Social preview image
    image: 'img/ekobelens-logo.svg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    navbar: {
      title: 'Ekobelens API',
      logo: {
        alt: 'Ekobelens API Logo',
        src: 'img/ekobelens-logo.svg',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'apisidebar',
          position: 'left',
          label: 'API Reference',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Getting Started',
        },
        {
          href: 'https://github.com/ekobelens-labs/ekobelens-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'API Reference',
              to: '/docs/api/generated/login',
            },
            {
              label: 'Getting Started',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'API Endpoints',
          items: [
            {
              label: 'Authentication',
              to: '/docs/api/generated/login',
            },
            {
              label: 'DRAM Management',
              to: '/docs/api/generated/create-dram-document-chapter-1',
            },
            {
              label: 'User Management',
              to: '/docs/api/generated/register-user',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Docs Repository',
              href: 'https://github.com/ekobelens-labs/ekobelens-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ekobelens. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  themes: ["docusaurus-theme-openapi-docs"],
};

export default config;
