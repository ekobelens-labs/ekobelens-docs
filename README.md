# Ekobelens API Documentation

This is the official documentation site for the Ekobelens API. It provides comprehensive guides and reference materials for integrating with the Ekobelens platform, which manages organizations, users, and DRAM (Dokumen Rencana Aksi Mitigasi - Mitigation Action Plan Documents).

The documentation site is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## What's Documented

The documentation covers:

- **Authentication & Authorization**: JWT-based authentication with refresh token support
- **Organization Management**: Create, update, and manage organizational structures
- **User Management**: Comprehensive user operations including roles and permissions
- **DRAM Operations**: Full lifecycle management of Mitigation Action Plan Documents

## Development

### Installation

```bash
yarn install
```

### Local Development

```bash
yarn start
```

This starts a local development server and opens a browser window. Most changes are reflected live without restarting the server.

### Build

```bash
yarn build
```

Generates static content into the `build` directory for hosting.

## Contributing

When contributing to the documentation:

1. Follow the existing structure and style
2. Test your changes locally with `yarn start`
3. Ensure the build passes with `yarn build`
4. Use clear, concise language appropriate for API documentation
