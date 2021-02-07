

# YearnFinance

## Configuration Management 
> `yearn_config.json` 

A global configuration file that can be found at the root of workspace and a 
project-specific configuration file found at the root of each project that overrides 
the global settings for that project.

For instance, libA has a tsconfig.json file that extends the global tsconfig.json file:

```
YEARN-applet // Applet, Plugin, Integration, a discrete package of libraries  etc 
├── apps
├── libs
│   └── libA
│       ├── src
│       └── tsconfig.json
├── tools
├── workspace.json // can be for yarn , etc 
├── yearn_config.json // customized configuration and hook entrypoint
├── package.json
└── tsconfig.json
```

## Monorepo Struct

```
YEARN-SDK-monorepo
├── e2e
│   └── YEARN-plugin-e2e
│       ├── jest.config.js
│       ├── tests
│       │   └── YEARN-plugin.test.ts
│       ├── tsconfig.json
│       └── tsconfig.spec.json
├── packages 
│   └── YEARN-plugin
│       ├── README.md
│       ├── executors.json
│       ├── collection.json
│       ├── jest.config.js
│       ├── package.json
│       ├── src
│       │   ├── executors
│       │   │   └── YEARN-plugin
│       │   │       ├── executor.spec.ts
│       │   │       ├── executor.ts
│       │   │       ├── schema.d.ts
│       │   │       └── schema.json
│       │   ├── index.ts
│       │   └── generators
│       │       └── YEARN-plugin
│       │           ├── files
│       │           │   └── src
│       │           │       └── index.ts.__template__
│       │           ├── schema.d.ts
│       │           ├── schema.json
│       │           ├── generator.spec.ts
│       │           └── generator.ts
│       ├── tsconfig.json
│       ├── tsconfig.lib.json
│       └── tsconfig.spec.json
├── tools
│   ├── generators
│   └── tsconfig.tools.json
├── jest.config.js
├── yearn_config.json // workspace configuration hook 
├── package.json
├── tsconfig.json
├── workspace.json
└── yarn.lock
```



## Adding capabilities to your workspace


## Generate React Component 

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.



## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
