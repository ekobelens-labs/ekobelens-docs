import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Keep Guides minimal and focused
  tutorialSidebar: ['intro'],

  // API Documentation sidebar
  apisidebar: [
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "doc",
          id: "api/login",
          label: "Login",
        },
        {
          type: "doc",
          id: "api/refresh-token",
          label: "Refresh Token",
        },
      ],
    },
    {
      type: "category",
      label: "DRAM",
      items: [
        {
          type: "doc",
          id: "api/create-dram-document-chapter",
          label: "Create DRAM Document Chapter",
        },
      ],
    },
    {
      type: "category",
      label: "Organization",
      items: [
        {
          type: "doc",
          id: "api/create-organization",
          label: "Create Organization",
        },
      ],
    },
    {
      type: "category",
      label: "User",
      items: [
        {
          type: "doc",
          id: "api/register-user",
          label: "Register User",
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
