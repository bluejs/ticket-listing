# Ticket Listing Application

This project is a simple React application to list a large number of tickets using a virtualized list to handle performance efficiently.

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js

### Installing

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bluejs/ticket-listing.git
   cd ticket-listing
   ```

2. **Install dependencies:**

   ```bash
   # For npm
   npm install

   # For yarn
   yarn
   ```

## Run, test and build

### Running the Application

To start the development server, run:

```bash
npm run start
```

This will start the application and open it in your default web browser at `http://localhost:3000`.

### Running Unit Tests

To run the unit tests, use:

```bash
npm run test:unit
```

To run unit tests in watch mode, use:

```bash
npm run test:unit:watch
```

To generate a code coverage report, use:

```bash
npm run test:coverage
```

### Running End-to-End(E2E) Tests

End-to-end tests are powered by Cypress. You can run them in either headless mode or in the Cypress GUI.

1. **Headless Mode:**

   ```bash
   npm run test:e2e
   ```

   This will start the development server and run Cypress tests in headless mode.

2. **Cypress GUI:**

   ```bash
   npm run test:e2e:open
   ```

   This will start the development server and open the Cypress GUI, where you can run the tests interactively.

### Linting

To lint your code and automatically fix issues, use:

```bash
npm run lint
```

### Building

To build project for deploy, run:

```bash
npm run build
```

You could find build result in `/build/` directory, it's ready to deploy

### Ejecting

You should **NEVER** use this command:

```bash
npm run eject
```

**Note:** This action is irreversible and rue-the-day.

### License

This project is licensed under the MIT License - see the LICENSE file for details.
