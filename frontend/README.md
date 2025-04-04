# Project summary
This is a full-stack web application built for managing employees. It includes features like user signup, login, and viewing a list of employees. The app is built using Angular for the frontend and connects to a GraphQL backend.

# Author
# Fatima Arab
# Student ID: 101463256

# Features
Signup: Create a new account.

Login: Securely log in with your email and password.

View Employees: See the list of employees (only available after login).

Add/Edit/Delete Employees (optional depending on your scope).

Authentication Guard: Prevents access to the employee list unless the user is logged in.

Logout: Ends the session and redirects the user to the login page.

# How It Works
1. User Signup/Login:

A user signs up or logs in using their email and password.

Upon login, a session is stored so the app knows the user is logged in.

2. Auth Guard:

Users cannot access the employee list unless they are logged in.

If they try to go directly to /employees, they will be redirected to /login.

3. Employee List:

Once logged in, users can view the employee list.

This list is only visible when logged in.

4. Logout:

Logs the user out and hides the employee list.


src/
│
├── app/
│   ├── login/               → Login page and component
│   ├── signup/              → Signup page and component
│   ├── employee-list/       → Displays employee table
│   ├── auth.service.ts      → Handles login/logout logic
│   ├── auth.guard.ts        → Protects routes from unauthorized users to see employee list
│   └── app.component.ts     → Main app layout and navbar
│
├── assets/
├── styles.css               → Main styling file
└── index.html               → App root HTML






































































# Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
