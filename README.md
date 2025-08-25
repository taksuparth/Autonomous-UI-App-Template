# UI Admin Template

A feature-rich, type-safe, and scalable frontend template for building modern SaaS applications. This template provides a complete setup for authentication, data fetching, form management, and a professional dashboard layout, allowing you to start building your application's core features immediately.

---

## Getting Started

Follow these steps to get your local development environment up and running.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/) (or npm)
- A running instance of the backend API.

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/taksuparth/Autonomous-UI-App-Template.git your-project-name
    cd your-project-name
    ```

2.  **Install dependencies**

    ```bash
    yarn install
    ```

3.  **Set up environment variables**
    Copy the template file to create your local environment configuration.

    ```bash
    cp .env.template .env
    ```

    Now, open the `.env` file and update the variables (like `VITE_API_BASE_URL`) to match your backend setup.

4.  **Run the development server**
    ```bash
    yarn dev
    ```
    Your application will be running at `http://localhost:5173`.

---

## Key Features

This template is built with a powerful file-based routing system provided by the [React Router v7 framework](https://reactrouter.com/). The structure of your `app/routes/` directory defines the URL structure of your application.

### Layout Conventions

The routing is designed to handle different layouts and authentication states automatically based on the folder names:

- **`(authAdmin)`**: Any route placed in a folder with this prefix (e.g., `(authAdmin).$eventId.home.tsx`) will automatically be rendered inside the main dashboard `PageLayout`. The layout's `loader` function also enforces that a user must be authenticated to access these pages, redirecting to `/login` if they are not.

- **`(auth)`**: Routes in folders with this prefix (e.g., `(auth).$eventId.guest.new.tsx`) are also protected and require authentication. However, they are rendered in a full-page layout without the dashboard sidebar, making them perfect for dedicated forms or full-screen views.

- **Public Routes**: Files directly in the `routes` directory (e.g., `login.tsx`, `register.tsx`) are public and do not have any layout applied by default.

---

## Technologies & Tools

This template integrates a suite of modern, type-safe tools to provide a best-in-class developer experience.

| Technology                                                           | Description                                                                                                                                 |
| :------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| **[React Router v7](https://reactrouter.com/)**                      | Handles all routing, data loading, and mutations with a powerful file-based system.                                                         |
| **[Shadcn/UI](https://ui.shadcn.com/)**                              | A collection of beautifully designed, accessible, and unstyled components. See our **[Component Guide](./COMPONENTS.md)** for more details. |
| **[Tailwind CSS](https://tailwindcss.com/)**                         | A utility-first CSS framework for rapidly building custom user interfaces.                                                                  |
| **[TanStack Query](https://tanstack.com/query/latest)**              | A powerful library for server-state management, handling all data fetching, caching, and mutations.                                         |
| **[React Hook Form](https://react-hook-form.com/)**                  | A performant and flexible library for building and managing forms.                                                                          |
| **[Zod](https://zod.dev/)**                                          | A TypeScript-first schema declaration and validation library, used for all form and data validation.                                        |
| **[TypeScript](https://www.typescriptlang.org/)**                    | Provides static typing for the entire application, ensuring code quality and preventing bugs.                                               |
| **[ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)** | Enforce a consistent and high-quality code style across the entire project.                                                                 |

---

## Advanced Guides

- **[Containerization with Docker](./documentation/docker.md)**: Learn how to build and run this application inside a Docker container.
- **[Keeping Your Template Updated](./documentation/templateSync.md)**: This repository includes a GitHub Action to automatically sync with the original template. Follow this guide to set it up.
- **[Component overview](./documentation/components.md)**: This repository uses shadcn for basic component blocks, follow this guide to understand it in detail.
