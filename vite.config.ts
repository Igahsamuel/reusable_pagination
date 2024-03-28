/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    coverage: {
      exclude: [
        // Add paths to files or directories you want to exclude from coverage
        'node_modules',
        'dist',
      ],
      include: [
        // Add paths to files or directories you want to include in coverage
        'testing_pagination/src/components/Pagination.tsx',
      ],
      thresholds: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
      },
    },
  },

  plugins: [react()],
});
