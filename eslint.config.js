import react from "@woohm402/eslint-config-react";

export default [
  {
    ignores: [".yarn", "*.js", "public/mockServiceWorker.js", "dist"],
  },
  ...react({
    tsconfigRootDir: import.meta.dirname,
    envAllowedFiles: ["src/App.tsx"],
  }),
  {
    ignores: ['src/components/ui/calendar.tsx'],
  },
];
