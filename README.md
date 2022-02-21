# Generate Desi Names

## What is Generate Desi Names?

Generate desi names is an easy to use package for generating Indian names. Currently, this package has a dictionary of about 300 Indian names.

## Table of contents
- [Generate Desi Names](#generate-desi-names)
    - [What is Generate desi names?](#what-is-generate-desi-names)
    - [Table of contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
        - [Typescript support](#typescript-support)

## Installation

```sh
$ npm i generate-desi-names
```

## Usage

```js
const { generateDesiName } = require('generate-desi-names');
const desiName = generateDesiName();
```

### Typescript support

```typescript
import { generateDesiName } from 'generate-desi-names';
const desiName: string = generateDesiName();
```
