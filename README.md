# Coxuna API

This repository contains the backend implementation of the Coxuna API.

## Endpoints

### Authentication

- **POST /api/signup**
  - Create a new user account.
  - Request body: `{ username, email, password }`.
  - Returns status 201 on success, 400 if the user already exists, and 500 on server error.

- **POST /api/login**
  - Login with existing user credentials.
  - Request body: `{ email, password }`.
  - Returns status 200 on successful login along with user details, 401 for invalid credentials, and 500 on server error.

### CXA Operations

- **POST /api/mine**
  - Mine a CXA (Coxuna Asset).
  - Request body: `{ username }`.
  - Returns status 201 on successful mining, 404 if the user is not found, 400 if the user has already mined 2 CXA records in the last 24 hours, and 500 on server error.

- **GET /api/getAmountMined**
  - Get the total amount of CXA mined by a user.
  - Request body: `{ userId }`.
  - Returns status 200 along with the total mined amount or 404 if the user is not found.

## Deployment

This API is deployed and accessible at [https://coxuna-api-robs.onrender.com](https://coxuna-api-robs.onrender.com).

## Notes

- Ensure proper authentication and authorization mechanisms are in place for sensitive endpoints.
- Handle errors gracefully and provide meaningful error messages to clients.
- Regularly monitor and maintain the deployed endpoint for optimal performance and security.

For any questions or issues, please contact the repository owner.
