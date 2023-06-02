# Muscode App - application for managing tasks and creating wishlists

live site: https://muscode-task-management-app.netlify.app/

Used in this project:

- Vue.js
- Pinia
- Vite
- Vuelidate for form validations
- TailwindCss
- ace DevTools, WAVE evaluation tool - Web Accessibility Testing tools
- Pixel Perfect Pro extension
- [Squ](https://squoosh.app/editor) and [Photopea](https://www.photopea.com/) for pictures optimalizations

Future development:

- I installed Vitest and Cypress, because I would like to learn testing applications and it would be a good project for that
- I would like to develop this application with moving data to firebase and learn Firebase data management and develop functionalities like adding wish products, removing & editing todos.
- I would like to add animiations for modal and loading spinner

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
