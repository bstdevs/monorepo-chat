# Monorepo Chat

## Overview

This repository is managed as a monorepo using Lerna. A monorepo is a repository that contains multiple projects, libraries, or components, allowing for easier code sharing, versioning, and dependency management across multiple packages.

## Setup

To get started, make sure you have Node.js and npm installed on your machine. Then, follow these steps:

1. Clone this repository:

```bash
git clone git@github.com:bstdevs/monorepo-chat.git
```

2. Navigate into the cloned directory:

```bash
cd monorepo-chat
```   

3. Install dependencies:

```bash
npm install -g pnpm
npm install -g lerna
pnpm install
```

4. Remove the node_modules directory from all packages

```bash
lerna clean
```

## Usage
1. Adding a new package
   
To add a new package to the monorepo, you can use the following command:
```bash
npx lerna create <package-name>
```
This will scaffold a new package with the given name in the packages directory.

2. Running scripts

You can run scripts across all packages in the monorepo using Lerna. For example, to run the build script in all packages, you can use:
```bash
npx lerna run build
```

3. Versioning
Lerna can also help manage versioning across packages. You can version all packages at once using:
```bash
npx lerna version
```

4. Publishing
To publish packages to npm, you can use:
```bash
npx lerna publish
```
This will publish updated packages to npm, following the versioning you've set.

## Structure

```

monorepo-chat/
│
├── packages/
│   ├─  backend/
│   │   ├── nest-cli.json: contains configuration settings for the NestJS CLI (Command Line Interface)
│   │   ├── package.json:  is the main project configuration file for the backend application. It includes metadata about the project, as well as dependencies and scripts needed for development, testing, and building the application.
│   │   ├── src/: contains the source code of the backend application.
│   │   │   ├── utils/: holds utility functions or modules that provide reusable functionality across the backend application.
│   │   │   ├── user/: contain files related to user management
│   │   │   ├── message/: contain files related to message management
│   │   │   ├── main.ts: is the entry point of the backend application, where the NestJS application is typically instantiated and started.
│   │   │   ├── database/: contain files related to database configuration
│   │   │   ├── channel/: contain files related to channel management
│   │   │   ├── auth/: contain files related to auth management
│   │   │   ├── app.service.ts: contains a service class that provides various business logic or functionality to other parts of the application.
│   │   │   ├── app.module.ts: defines the main application module in NestJS, where providers, controllers, and other modules are typically imported and configured.
│   │   │   └── app.controller.ts: contains a controller class that defines routes and request handlers for the backend API.
│   │   ├── tsconfig.build.json: contains configuration settings for TypeScript compilation specifically for building the backend application
│   │   └── tsconfig.json: contains general TypeScript configuration settings for the backend application.
│   ├─  frontend/
│   │   ├── tsconfig.json: contains configuration settings for TypeScript, a superset of JavaScript that adds static typing to the language. 
│   │   ├── tailwind.config.js: contains configuration settings for Tailwind CSS, a utility-first CSS framework. It allows customization of various aspects of Tailwind CSS such as theme, variants, and plugins.
│   │   ├── src/: contains the source code of the frontend application.
│   │   │   ├── utils/: holds utility functions or modules that provide reusable functionality across the application.
│   │   │   ├── services/: contain service modules responsible for interfacing with external APIs, databases, or other backend services.
│   │   │   ├── routes/: contain route definitions or configurations for client-side routing, such as those used in React Router.
│   │   │   ├── redux/: contain Redux-related files, such as action creators, reducers, and store configurations, for managing application state.
│   │   │   ├── react-app-env.d.ts: allows the definition of global types or interfaces for a React application.
│   │   │   ├── pages/: holds the different pages or views of the application, each implemented as a React component.
│   │   │   ├── lib/: contain shared libraries or utility modules used across the application.
│   │   │   ├── index.tsx: is the entry point of the React application, where the root component is typically rendered into the DOM.
│   │   │   ├── index.css: contains global styles that apply to the entire application.
│   │   │   ├── hooks/: might contain custom React hooks used for encapsulating reusable logic in functional components.
│   │   │   ├── components/:  holds reusable React components that are used throughout the application.
│   │   │   ├── assets/: contains static assets such as images, fonts, or other files used in the application.
│   │   │   └── App.tsx: contains the main component of the application, usually serving as the root component that wraps all other components.
│   │   ├── public/: contains static assets and files that are served directly to the client without being processed by a build tool. This can include HTML files, images, or other resources.
│   │   └── package.json: is the main project configuration file for the frontend application
├── .gitignore
├── package.json
└── lerna.json

```

## Acknowledgements

This project utilizes the following technologies:

- Lerna: A tool for managing JavaScript projects with multiple packages.
- Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- npm: The package manager for JavaScript and the world's largest software registry.