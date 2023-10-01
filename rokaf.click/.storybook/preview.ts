import type { Preview } from "@storybook/react";
import '../app/globals.css' // this connects the Storybook and tailwindcss

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
