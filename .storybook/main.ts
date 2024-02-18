import path from 'path';

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          include: [path.resolve(__dirname, '../src')],
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
        },
      },
    },
    '@storybook/preset-scss',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true, // makes string and boolean types that can be undefined appear as inputs and switches
      propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      // @ts-ignore
      skipPropsWithoutDoc: false,
      skipChildrenPropWithoutDoc: false,
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
    check: true, // type-check stories during Storybook build
  },
};

export default config;
