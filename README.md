# Front End Template with React

### Initializing the Development Environment
1. `npm install`
1. `gulp watch`

### Customizing for your project
1. Update `package.json`
    1. Change `author`, `name`, `version`, `description`, `repository.url`
    1. Run `npm outdated --depth=0` to see if there are new versions of dependencies.
       If so, consider updating them in the front-end template as well as the project
1. Update `application/config` files
    1. In `config.development.js` replace `api.project.vm` with proper development api hostname
    1. In `config.production.js` replace `api.project.com` with proper production api hostname
    1. In `config.qa.js` replace `api-project-com` with correct QA app name
1. Update `application/index.html` to replace `@todo` references with proper values
