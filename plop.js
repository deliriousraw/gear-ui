/** Read More: https://plopjs.com/documentation/#modify */

module.exports = function (plop) {
    plop.setGenerator('component', {
      description: 'add new component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'component name please (e.g. Component name, component name)',
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/index.ts',
          templateFile: 'templates/component/index.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/component/Component.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'templates/component/Component.stories.tsx.hbs',
        },
        {
          type: 'add',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.mdx',
          templateFile: 'templates/component/Components.mdx.hbs',
        },
        {
          type: 'modify',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.mdx',
          pattern: /@name@/g,
          template: '{{pascalCase name}}',
        },
        {
          type: 'modify',
          path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.mdx',
          pattern: /@lower-case-name@/g,
          template: '{{lowerCase name}}',
        },
        {
          type: 'append',
          path: 'src/components/index.ts',
          template: 'export * from "./{{pascalCase name}}";\n',
        },
      ],
    });
  };