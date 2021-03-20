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
