# react-bundle

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
[![npm](https://img.shields.io/npm/v/react-bundle.svg)](https://npmjs.com/package/react-bundle)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg)](https://github.com/RichardLitt/standard-readme)

Lazy load dependencies (using [bundle-loader](https://github.com/webpack-contrib/bundle-loader) or [`import()`](https://github.com/tc39/proposal-dynamic-import))

*Taken from [react-router](https://github.com/ReactTraining/react-router/blob/dfec1065c6c70c7f520328c7113aad781616c666/packages/react-router-website/modules/components/Bundle.js)*

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [License](#license)

## Install

```
yarn add react-bundle
```

## Usage

**Using [bundle-loader](https://github.com/webpack-contrib/bundle-loader)**:

```js
import loadSomething from 'bundle-loader?lazy!./Something'

<Bundle load={loadSomething}>
  {(Something) => (
    // do something w/ the module
  )}
</Bundle>
```

**Using [`import()`](https://github.com/tc39/proposal-dynamic-import)**:

```js
<Bundle load={() => import('./Something')}>
  {(Something) => (
    // do something w/ the module
  )}
</Bundle>
```

## License

BSD-3-Clause
