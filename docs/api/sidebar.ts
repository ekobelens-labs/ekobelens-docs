import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/ekobelens-api",
    },
    {
      type: "category",
      label: "Address",
      items: [
        {
          type: "doc",
          id: "api/get-list-of-sub-districts-by-district-code",
          label: "Get List of Sub-Districts by District Code",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-list-of-provinces",
          label: "Get List of Provinces",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-list-of-districts-by-province-code",
          label: "Get List of Districts by Province Code",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-list-of-villages-by-sub-district-code",
          label: "Get List of Villages by Sub-District Code",
          className: "api-method get",
        },
      ],
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
