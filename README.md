# Docu validator

This is a spike application developed to test and explore new features or architectural patterns in a lightweight and efficient way. The application is set up to use [Vite](https://vitejs.dev/) as the development server and build tool.

## Getting Started

Follow the steps below to set up and run the application locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

### Running the Application

Start the development server with Vite:

```bash
yarn vite
```

The application will be accessible at `http://localhost:5173` by default (or a different port if specified).

### Building for Production

To build the application for production:

```bash
yarn build
```

The build files will be available in the `dist` directory.

### Serving the Built Application

To serve the production build locally:

```bash
yarn preview
```

The preview will be available at `http://localhost:4173` by default.
