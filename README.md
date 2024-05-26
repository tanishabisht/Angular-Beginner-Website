# Learn - Angular 11
This repository guides you through the process of building and running an Angular 11 application. It includes detailed instructions on setting up the environment, running the server, and adding new features like components and services. The project utilizes Bootstrap for styling and focuses on key Angular features like routing, CRUD operations, and forms.

![gif not found](/demo.gif)

## Instructions to run the application
1. **Clone the Repository:** Start by cloning the repo to your local machine to get all the necessary files.
2. **Node Version:** Ensure you're using the correct version of Node.js:
   - Switch to Node v14.21.3 using `nvm install v14.21.3` followed by `nvm use v14.21.3`.
3. **Install Dependencies:** Run `npm install` to install all required dependencies.
4. **Launch the Application:** Use `npx ng serve --open` to start the development server and open the application in your web browser.


## Frequently used development commands
- **Start the Server:** `ng serve --open` to run and automatically open the app.
- **Generate Components:** `ng generate component component-name` to add new components.
- **Build the Project:** `ng build` to compile the application into an output directory.
- **Run Unit Tests:** `ng test` with [Karma](https://karma-runner.github.io) to execute unit tests.
- **Run End-to-End Tests:** `ng e2e` with [Protractor](http://www.protractortest.org/) for comprehensive testing.


## Key Learning Concepts
- **[Bootstrap Integration](https://therichpost.com/angular-11-bootstrap-4-navbar-with-icon-top/):** Learn to incorporate Bootstrap for responsive design.
- **Angular [Routing](https://angular.io/guide/router):** Understand how to manage navigation within the app.
- **Component Creation:** Build and connect various components like Login, Signup, and CRUD pages.
- **CRUD Operations:** Implement Create, Read, Update, Delete operations using HTTP methods.
  - [GET GET:params POST](https://www.youtube.com/watch?v=rdLJNGZvlAA)
  - [PUT PATCH DELETE](https://www.youtube.com/watch?v=sz30RXzRRzs)
- **[Forms](https://www.youtube.com/playlist?list=PL9Osfv2HEXE2IDfYv6ORboNc4I-5Vp7cw) and Validation:** Explore both template-driven and reactive forms along with field validation techniques.
  - Template forms
  - Reactive Forms (used this in project)
  - Validation
- **Handling CORS:** Resolve Cross-Origin Resource Sharing issues with proxy configuration.
  - Error where? While implemnetating CRUD and Forms, wwhen connecting with Auth API.
  - CORs error [fix](https://www.positronx.io/handle-cors-in-angular-with-proxy-configuration/#:~:text=Enable%20CORS%20with%20Proxy%20Configuration%20Settings%20in%20Angular.&text=To%20enable%20CORS%20via%20proxy,the%20deliberate%20use%20of%20SSL).
- **[Component Interaction](https://www.youtube.com/watch?v=qenFRHDxU6E&list=PL4cUxeGkcC9jqhk5RvBiEwHMKSUXPyng0):** Use Angular's `@Input` to pass data between parent and child components.
- **Lifecycle Hooks:** Discover how to utilize Angular lifecycle hooks for managing component states.
- **Piping:** Apply pipes in Angular for transforming displayed values.
- **[Deployment](https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4):** Steps to deploy the Angular app using GitHub Pages.


## Roadmap: Must know concepts
- Angular architecture
- Interpolation
- Binding
  - Property Binding
  - Class Binding
  - Style Binding
  - Event Binding
  - Two way Binding
- Structural Directives
  - ngIf
  - ngSwitch
  - ngFor
- Pipes
- Dependancy Injections
  - Services
  - HTTP Mechanism and Requests
- Routing
  - Wildcard route
  - Redirecting routes
  - Route Params
  - Optional Route Params