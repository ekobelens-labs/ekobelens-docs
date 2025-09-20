import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/ekobelens-api",
    },
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "doc",
          id: "api/login",
          label: "Login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/refresh-token",
          label: "Refresh Token",
          className: "api-method post",
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
          className: "api-method post",
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
          className: "api-method post",
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
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
