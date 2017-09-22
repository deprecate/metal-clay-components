# metal-clay-components

[![Build Status](https://travis-ci.org/metal/metal-clay-components.svg?branch=master)](https://travis-ci.org/metal/metal-clay-components)

## Setup

1. Install NodeJS >= [v6.11.0](http://nodejs.org/dist/v6.11.0/), if you don't have it yet.

2. Install lerna and yarn global dependencies:

  ```
  [sudo] npm install -g lerna yarn
  ```

3. Run the bootstrap script to install local dependencies and link packages together:

  ```
  npm run lerna
  ```

4. Build all packages

  ```
  npm run build
  ```

5. Start a local server on port 4000

  ```
  npm run start
  ```

6. Run tests:

  ```
  npm run test
  ```
