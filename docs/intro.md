---
sidebar_label: Getting Started
title: Getting Started
---

# Ekobelens API — Getting Started

Welcome to the Ekobelens API documentation. Ekobelens provides a comprehensive platform for managing organizations, users, and DRAM (Dokumen Rencana Aksi Mitigasi - Mitigation Action Plan Documents) through a modern REST API. This guide will help you get started with authentication, common API patterns, and best practices for integrating with our services.

## Base URL

Production: `https://api.ekobelens.com/api/v1`

All paths in the API reference are relative to this base.

## Authentication

Ekobelens issues a JWT access token and a refresh token. Use the access token in the `Authorization` header as `Bearer <token>`.

1) Login and get token pair
D
```bash
curl -X POST \
  https://api.ekobelens.com/api/v1/auth/login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "user@example.com",
    "password": "your-strong-password"
  }'
```

Successful response

```json
{
  "data": {
    "access_token": "<ACCESS_TOKEN>",
    "refresh_token": "<REFRESH_TOKEN>"
  },
  "request_id": "01J..."
}
```

2) Call an authenticated endpoint

```bash
curl \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  https://api.ekobelens.com/api/v1/organization/
```

3) Refresh your token pair

```bash
curl -X POST \
  https://api.ekobelens.com/api/v1/auth/refresh \
  -H 'Content-Type: application/json' \
  -d '{
    "refresh_token": "<REFRESH_TOKEN>"
  }'
```

Successful response has the same shape as Login, with a new token pair.

## HTTP Conventions

- Content type: `application/json`
- Authorization: `Authorization: Bearer <access_token>` for protected endpoints

### Error format

Validation and other errors return an `apperror.Error` object.

```json
{
  "success": false,
  "message": "validation error",
  "issues": [
    {
      "code": "invalid_type",
      "message": "Required",
      "path": ["email"],
      "expected": "string",
      "received": null
    }
  ],
  "formatted": {}
}
```

Note: On success, responses use a wrapper with `data` and `request_id` as shown in the Login example.

## API Features

The Ekobelens API provides:

- **Authentication & Authorization**: Secure JWT-based authentication with refresh token support
- **Organization Management**: Create, update, and manage organizational structures
- **User Management**: Comprehensive user operations including roles and permissions
- **DRAM Operations**: Full lifecycle management of Dokumen Rencana Aksi Mitigasi (Mitigation Action Plan Documents)

## Next Steps

- Explore the API Reference for detailed endpoints
- Use the sidebar to navigate to Auth, DRAM, User, and Organization APIs
- Check out code examples for common integration patterns
