[projectUri]: https://github.com/sketch7/ssv-ng2-core
[projectGit]: https://github.com/sketch7/ssv-ng2-core.git
[changeLog]: ./doc/CHANGELOG.md

[contribWiki]: ./doc/CONTRIBUTION.md
[releaseWorkflowWiki]: ./doc/RELEASE-WORKFLOW.md

[jspm]: http://jspm.io
[typings]: https://github.com/typings/typings

# ssv-ng2-core
[![Build status](https://ci.appveyor.com/api/projects/status/2e0an5hvxtfs08mf?svg=true)](https://ci.appveyor.com/project/chiko/ssv-ng2-core)
[![Build status](https://ci.appveyor.com/api/projects/status/2e0an5hvxtfs08mf/branch/master?svg=true)](https://ci.appveyor.com/project/chiko/ssv-ng2-core/branch/master)
[![bitHound Overall Score](https://www.bithound.io/github/sketch7/ssv-ng2-core/badges/score.svg)](https://www.bithound.io/github/sketch7/ssv-ng2-core)
[![npm version](https://badge.fury.io/js/ssv-ng2-core.svg)](https://badge.fury.io/js/ssv-ng2-core)

Sketch7 Angular2 core components and utilities

In order to contribute please read the [Contribution guidelines][contribWiki].

**Quick links**

[Change logs][changeLog] | [Project Repository][projectUri] | [Contribution guidelines][contribWiki]

# Installation
Get library via [jspm]
```bash
jspm install ssv-ng2-core
```
TypeScript Typings via [typings]
```bash
typings install github:sketch7/ssv-ng2-core --save
```

# Usage
```ts
// todo: add sample
import {logger} from "ssv-ng2-core";

```


# Getting Started

## Setup Machine for Development
Install/setup the following:

- NodeJS v4+
- Visual Studio Code or similar code editor
- TypeScript 1.8+
- SourceTree, SmartGit (or similar)
- Ensure to install **global NPM modules** using the following:


```bash
npm install -g git gulp typings karma-cli jspm
```


### Cloning Repo

- Open SourceTree
- Clone project repo from [project git][projectGit]
- Switch to `develop` branch


## Project Setup
The following process need to be executed in order to get started.

```bash
npm install
jspm install
```


## Building the code

```
gulp build
```
In order to view all other tasks invoke `gulp` or check the gulp tasks directly.

## Running the tests

```
gulp test
```


## Development utils

### Trigger gulp watch
Handles compiling of changes.
```
gulp watch
```


### Running Continuous Tests
Spawns test runner and keep watching for changes.
```
gulp tdd
```


## Preparation for Release

```
gulp prepare-release --bump major|minor|patch|prerelease (default: patch)
```
Check out the [release workflow guide][releaseWorkflowWiki] in order to guide you creating a release and distributing it.