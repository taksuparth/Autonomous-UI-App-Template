// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // Point to your running backend's GraphQL endpoint
  schema: 'http://localhost:3000/api/graphql',

  // Scan all relevant files inside your ./app directory for GraphQL operations.
  documents: ['app/**/*.{ts,tsx,js,jsx}'],

  // Configure the output
  generates: {
    // This will create a `gql` folder inside your `app` directory
    './app/gql/': {
      // Use the "client" preset for the recommended multi-file output.
      // This is optimized for code-splitting and performance.
      preset: 'client',
      plugins: [],
      presetConfig: {
        // This tells the generator to create fragments with a specific naming convention
        fragmentMasking: { unmaskFunctionName: 'getFragmentData' },
      },
      config: {
        useTypeImports: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
