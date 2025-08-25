# Component Guide (Shadcn/UI)

This project uses [Shadcn/UI](https://ui.shadcn.com/) for its component library. It's important to understand that Shadcn is **not** a traditional component library that you install from npm. Instead, it's a collection of reusable components that you copy directly into your project.

[Back to Main README](../README.md)

---

## How It Works

- **Component Location**: All the UI components (like `Button`, `Input`, `Card`, etc.) are located in the `src/components/ui/` directory.
- **Full Ownership**: Because these components are part of your codebase, you have complete control over their code, styling, and behavior. You can modify them to fit your needs without waiting for a library update.

## How to Add New Components

You should **never** install a new Shadcn component with `yarn add`. Instead, you use the official `shadcn-ui` command-line tool, which will add the component's source code directly to your project.

**Step-by-step instructions:**

1.  **Find a Component**: Browse the [Shadcn/UI documentation](https://ui.shadcn.com/docs/components/accordion) to find the component you need.

2.  **Run the CLI Command**: In your terminal, run the `add` command for that component. For example, to add the `Accordion` component, you would run:

    ```bash
    npx shadcn-ui@latest add accordion
    ```

3.  **Component Added**: The CLI will automatically add the `accordion.tsx` file to your `src/components/ui/` directory.

4.  **Import and Use**: You can now import the component directly from its file and use it in your application:

    ```tsx
    import { Accordion } from '@/components/ui/accordion';
    ```

This approach gives you the best of both worlds: beautifully designed components and the flexibility to customize them as if you had written them yourself.
