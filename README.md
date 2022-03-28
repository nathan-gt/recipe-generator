# recipe-generator

### Pushing to prod (github pages):
1. switch which line is commented in `vue.config.js`
2. `npm run build`
3. commit the changes locally
4. `git subtree split --branch gh-pages --prefix dist/`
5. `git push --all`

Don't forget to reswitch the commented line in `vue.config.js` and redo a `npm run build`


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).