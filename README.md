# README

[![license](https://img.shields.io/badge/License-Apache%202.0-green.svg?style=flat)
](./LICENSE)

[![CI](https://github.com/LionWeb-io/lionweb-typescript/actions/workflows/test.yaml/badge.svg)
](https://github.com/LionWeb-io/lionweb-typescript/actions/workflows/test.yaml)

[![npm](https://img.shields.io/npm/v/%40lionweb%2Fjson?label=%40lionweb%2Fjson)
](https://www.npmjs.com/package/@lionweb/json)
[![npm](https://img.shields.io/npm/v/%40lionweb%2Fjson-utils?label=%40lionweb%2Fjson-utils)
](https://www.npmjs.com/package/@lionweb/json-utils)
[![npm](https://img.shields.io/npm/v/%40lionweb%2Fjson-diff?label=%40lionweb%2Fjson-diff)
](https://www.npmjs.com/package/@lionweb/json-diff)
[![npm](https://img.shields.io/npm/v/%40lionweb%2Fcore?label=%40lionweb%2Fcore)
](https://www.npmjs.com/package/@lionweb/core)
[![npm](https://img.shields.io/npm/v/%40lionweb%2Fcli?label=%40lionweb%2Fcli)
](https://www.npmjs.com/package/@lionweb/cli)
[![npm](https://img.shields.io/npm/v/%40lionweb%2Futilities?label=%40lionweb%2Futilities)
](https://www.npmjs.com/package/@lionweb/utilities)
[![npm](https://img.shields.io/npm/v/%40lionweb%2Fvalidation?label=%40lionweb%2Fvalidation)
](https://www.npmjs.com/package/@lionweb/validation)
[![npm](https://img.shields.io/npm/v/%40lionweb%2Fts-utils?label=%40lionweb%2Fts-utils)
](https://www.npmjs.com/package/@lionweb/ts-utils)
[![npm](https://img.shields.io/npm/v/%40lionweb%2Ftextgen-utils?label=%40lionweb%2Ftextgen-utils)
](https://www.npmjs.com/package/@lionweb/textgen-utils)

This repository contains a TypeScript implementation for (parts of) the [LionWeb specification](https://lionweb-io.github.io/specification/) – specifically: release version **2023.1** of the LionWeb specification.

_Note_ that this repo doesn't implement the specification completely.
In particular:

* No support for release version 2024.1 (yet).
* Not all constraints on the LionCore M3 have been implemented.
* The functionality in the `utilities` and `validation` packages is provided “as-is”.

The implementation of the JSON serialization format, serialization from in-memory representations to that format, and vice versa, are all pretty solid.

## Repo org

The implementation is divided up in a number of NPM packages in the directory [`packages`](./packages) (in order of importance) — see their READMEs for more details:

* `json`
  Encapsulates the JSON serialization format.

* `json-utils`
  Utilities around the JSON serialization format, also i.c.w. LionCore M3.

* `json-diff`
  Computes differences between LionWeb serialization chunks.

* `core`
  The "core stuff" such as: base types, the LionCore M3 (including the `builtins` language), and (de-)serialization.

* `utilities`
  Utilities on top of the `core` packages that might be broadly useful, but should not go into the `core` package.

* `validation`
  Validators that validate a JSON serialization.

* `ts-utils`
  General TypeScript utilities, e.g. for working with maps and such.

* `textgen-utils`
  General utilities for doing text – i.e.: code – generation, typically based on the `littoral-templates` package.

* `cli`
  A package with an executable to trigger some of the functionality in `utilities` through a commandline interface (CLI), i.e. from the commandline.

* `class-core`
  A package that contains a framework for the implementation of `INode` that's class-based, and can handle deltas.

* `class-core-generator`
  A package that contains a code generator to generate classes based on the `class-core` package from an M2.

* `test`
  A package containing (unit) tests for the packages above.

* `artifacts`
  A package that generates artifacts (serialization chunks, diagrams, JSON Schemas) from some of the models constructed in the `core` and `test` packages.

* `build`
  A package that builds part of the code in `class-core` — specifically the part related to the delta protocol.

  _Note_ that this package – and specifically the `generate-for-class-core.ts` file – depends on `class-core` itself.
  This constitutes a _circular_ dependency, but that only exists at compile+build time, so should not be problematic.
  To ensure that a “clean clone” of this repository is not impacted, the `make-class-core.sh` script builds `class-core` first, before compiling and running `build`, and then builds `class-core` again.

Each of these packages have their own `README.md`.
The following packages are published in the scope of [the `lionweb` organization](https://www.npmjs.com/org/lionweb), meaning that they're all prefixed with `@lionweb/`: `json`, `json-utils`, `js-diff`, `core`, `ts-utils`, `utilities`, `cli`, and `validation`, `class-core`, `class-core-generator`
The other packages are for internal use only.
All these packages declare their own NPM semver identification, which isn't directly related to the release version of the LionWeb specification.

## Environment dependencies

This repo relies on the following tools being installed:

* [Node.js](https://nodejs.org/): JavaScript runtime
  * NPM (bundled with Node.js)
* (optional) [PlantUML](https://plantuml.com/).
  An IDE plugin such as the one [for IntelliJ IDEA](https://plugins.jetbrains.com/plugin/7017-plantuml-integration) also does the trick.

_Note_ that development tends to be done against the latest LTS (or even more recent) versions of Node.js and NPM.

## Development

### Making everything

Run the following command to setup the project:

```shell
npm run clean
npm install
npm run setup
```

Run the following command to **build** (“make”) each of the packages, in dependency order:

```shell
npm run build
```

This script exits as soon as the first failure it detected.
It also triggers the `generate` scriptlet of the `build` package, which generates a couple of source files in other packages.

The chain of preceding commands can also be run as follows:

```shell
npm run initialize
```

### Building, testing, linting

Run the following command to build all test packages::

```shell
npm run build
```

Run the following command to run all the tests:

```shell
# Run the tests
npm run test
```

The output should look similar to this (but much longer):
<br />
<br />
<img src="./documentation/images/test-output.png" alt="test" width="50%"/>

The following command statically _style_-checks the source code in all the packages:

```shell
# Run lint
npm run lint
```

_Note_ that this does not catch TypeScript compilation errors!
(That's because linting only does parsing, not full compilation.)

### Version numbers

To keep the version numbers of the various packages under `packages/` aligned throughout this repository, you use the Node.js script [`update-package-versions.js`](./update-package-versions.js).
You execute this script as follows from the repo's root:

```shell
npm run update-version
```

This reads the file [`packages/versions.json`](versions.json) and updates the `package.json` files of all _workspace packages_ (as listed in the root-level `package.json`) under `packages/` according to it, as well as the main(/root-level) `package.json`.
The format of that `versions.json` file is self-explanatory.
This script runs `npm install` afterward to update the `package-lock.json`.
Inspect the resulting diffs to ensure correctness, and don't forget to run `npm install` to update the `package-lock.json` in case you made corrections outside of/after running this script.

### Releasing/publishing packages

Packages are released to the [npm registry (website)](https://www.npmjs.com/): see the badges at the top of this document.
We'll use the terms “release/releasing” from now on, instead of “publication/publishing” as npm itself does.
We (only) release the following packages: `core`, `validation`, `utilities`, `cli`, `class-core`, `class-core-generator`, `ts-utils`, `textgen-utils`, `io-lionweb-mps-specific`.

Releasing a package involves the following steps:

1. Update the version of the package to release in its own `package.json`.
   1. Also update _all references_ to that package in any `package.json` in the other packages.
   2. Ensure that the Changelog section of the package to release has been updated properly and fully.
   3. Run `npm run initialize` to update `package-lock.json` and catch any (potential) problems.
   4. Commit all changes to the `main` branch — if necessary, through a PR.
2. Run the `release` script of the package:

    ```shell
    npm run release
    ```

    This requires access as a member of the `lionweb` organization on the npm registry — check whether you can access [the packages overview page](https://www.npmjs.com/settings/lionweb/packages).
    This step also requires a means of authenticating with npm, e.g. using the Google Authenticator app.
3. Tag the commit from the 1st step as `<package>-<version>`, and push the tag.
4. Update the version of the released package to its next expected _beta_ version, e.g. to `0.7.0-beta.0`.
    1. Run `npm run initialize` to update `package-lock.json` again.
    2. Commit all changes to the `main` branch — if necessary, through a PR.

Note that beta releases are different in a couple of ways:

* Beta releases have versions of the form `<semver>-beta.<beta sequence number>`, e.g.: `0.7.0-beta.0`.
* They are released using the `release-beta` scripts.

Releasing all (releasable) packages at the same time can be done through the top-level `release` script.
If you do that, you can perform the manual steps above all at the same time, which might save time and commits.

You can also perform an alpha release in exactly the same way as a beta release, but with all occurrences of "`beta`" replaced with "`alpha`".
Alpha releases should be limited to experimental features.

#### Future work

Currently, we're not using a tool like [`changesets`](https://www.npmjs.com/package/changeset) – including [its CLI tool](https://www.npmjs.com/package/@changesets/cli) – to manage the versioning and release/publication.
That might change in the (near-)future, based on experience with using `changesets` for the [LionWeb repository implementation](https://github.com/LionWeb-io/lionweb-repository/).

### Code style

All the code in this repository is written in TypeScript, with the following code style conventions:

* Indentation is: **4 spaces**.

* **No semicolons** (`;`s).
    This is slightly controversial, but I (=Meinte Boersma) simply hate semicolons as a statement separator that's virtually always unnecessary.
    The TypeScript compiler simply adds them back in the appropriate places when transpiling to JavaScript.

* Use **"FP-lite"**, meaning using `Array.map` and such functions over more imperative ways to compute results.

We use prettier with parameters defined in `.prettierrc`.
_Note_ that currently we don't automatically run `prettier` over the source code.

### Containerized development environment

If you prefer not to install the development dependencies on your machine, you can use our containerized development environment for the LionCore TypeScript project. This environment provides a consistent and isolated development environment that is easy to set up and use. To get started, follow the instructions in our [containerized development environment guide](./documentation/dev-environment.md). However, you can streamline the process by running the following command:

```shell
docker run -it --rm --net host --name working-container -v ${PWD}:/work indamutsa/lionweb-devenv:v1.0.0 /bin/zsh
```

* `docker run`: Initiates a new container.
* `-it`: Enables interactive mode with a pseudo-TTY.
* `--rm`: Removes container after exit.
* `--net host`: Shares the host's network.
* `--name working-container`: Names the container.
* `-v ${PWD}:/work`: Maps host's current directory to `/work` in the container.
* `indamutsa/lionweb-devenv:v1.0.0`: Specifies the Docker image.
* `/bin/zsh`: Starts a Zsh shell inside the container.

## Contributing

We're happy to receive feedback in the form of

* Issues – see the [issue tracker](https://github.com/LionWeb-io/lionweb-typescript/issues).
* Pull Requests.
    We generally prefer to _squash-merge_ PRs, because PRs tend to be a bit of a "wandering journey".
    If all commits in a PR are essentially "atomic" (in a sense that's at the discretion of the repo's maintainers), then we can consider merging by _fast-forwarding_.
* Join the [LionWeb Slack](https://join.slack.com/t/lionweb/shared_invite/zt-1zltq8eqv-QJmtsZA8_oscCrO8HOp3FA)!
