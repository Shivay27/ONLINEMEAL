### Generate  - Common Flags
* `--flat`  -> generate in top level of project?
* `--module=[module]`  -> the declaring module
* `--dry-run`  -> show files to be created without creating them

### Generate Component
`ng generate component [name of component]`
* ex (subfolder):  `ng g c core/footer` 
  * `--style=[css|scss|sass|less|styl]`
  * `--export`  -> declaring module will export this component


### Generate Module
`ng generate module [name of module]`
	* `--routing`  -> creates a routing module


### Other Common CLI Commands
* `ng new [project name] --routing`  -> create new project
* `ng serve --open --port [port #]`  -> serve app using dev server
* `ng lint`  -> runs tslint and consoles out errors
* `ng test --code-coverage`  -> runs karma tests
* `ng build [project name]`   -> production build to the `dist/` directory