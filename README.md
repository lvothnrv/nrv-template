# Nrv Template

Welcome to my Nrv template ! This template is designed to allow you to quickly create a robust and efficient backend api using powerful technologies.

## Technologies Used

- **ExpressJS**: A minimalist and flexible web framework for Node.js.
- **GraphQL with Apollo Server**: A specification and library for interacting with APIs efficiently, with Apollo Server facilitating the creation of a GraphQL server in Node.js.
- **MongoDB**: A flexible and scalable NoSQL database.
- **TypeScript**: A programming language that adds static typing features to JavaScript for better security and maintainability.
- **ESLint** and **Prettier** with Airbnb style: Static code analysis and automatic formatting tools to ensure clean and consistent code, following coding style rules in line with Airbnb's quality standards.

## Features

- Ready-to-use configurations for a smooth development experience.
- Authentication system already present in the template, allowing users to create an account, log in, with authentication middleware included.
- Well-thought-out folder architecture for optimal code organization.
- RSA Encryption and Decryption System: Implementation of the RSA system to encrypt and decrypt data in place, ensuring a high level of security for sensitive information exchanged via the API.
- TypeScript support for static type checking and better code documentation.

## How to Use

1. Install the template globally with the following command :
   ```
   npm install -g create-nrv-template
   ```

2. Next, create a new API project by executing the following command :
   ```
   npx create-nrv-template my-api
   ```

3. To run the server in development mode, use the command :
   ```
   npm run dev
   ```

4. To run the server in production mode, use the command :
   ```
   npm start
   ```

## Use RSA keys

To generate RSA keys :
   ```
   npm run generateRSAKey
   ```

To encrypt data :
   ```ts
   import { encryptWithRSA } from '../../services/rsaKey';
   ...
   const encryptedText = await encryptWithRSA('Text');
   ```

To decrypt data :
   ```ts
   import { decryptWithRSA } from '../../services/rsaKey';
   ...
   const decryptedText = await decryptWithRSA('Text');
   ```

## Contribution

Contributions are welcome ! Feel free to open an issue to report a bug or propose a feature request.
