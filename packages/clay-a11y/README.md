# clay-a11y

Clay Accessibility test module

## Setup

1. Install NodeJS >= v0.12.0 and NPM >= v3.0.0, if you don't have it yet. You
can find it [here](https://nodejs.org).

2. Install local dependencies:

```
npm install
```

3. Usage
The tool has been added as a `lerna` package. To activate it in a specific clay component it needs to be provided as a dependency in `package.json`. 

Add to the package
```
"devDependency": { 
  ...
  "clay-a11y": "^1.0.0",
  ...
}
```

Execute 
```
"script": {
  ...
  "a11y": "npm run build && clay-a11y -c demos/index.html"
  ...
}
```
