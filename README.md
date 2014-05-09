# Front End Template with React

### Initializing the Development Environment
1. `npm install`
1. `bower install`
1. `gulp watch`

### Customizing for your project
1. Update `package.json`
    1. Change `author`, `name`, `version`, `description`, `repository.url`
1. Update `Vagrantfile`
    1. Update `config.vm.box` and `app_name` to replace "frontend-template" with the project name
    1. Switch `example.com` references with the test deploy domain
    1. Change IP address from `192.168.50.2` to something that won't conflict with other projects
1. Update `server.js`
    1. Replace all `@todo` references with proper values
    1. Default HTML near bottom of file may need updating too
1. Update `sitemap-gen.js`
    1. Change `baseUrl` reference to "example.com" with the project's domain
    1. Default priority and frequency may need updating too
