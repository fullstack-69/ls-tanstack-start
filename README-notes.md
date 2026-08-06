# Changes from the Base TanStack Start Scaffold

This document summarizes the main differences between the current project and the default TanStack Start scaffold.

## Summary

The base scaffold was kept as the foundation, but the project was transformed into a small SSR-driven todo application with a local database, server functions, custom UI components, and supporting Docker-based demo infrastructure.

## Application Changes

### Custom home experience

- Replaced the starter-style landing experience with a custom homepage in `src/routes/index.tsx`.
- Added a composed layout that renders:
  - a navigation component,
  - a browser-aware greeting card,
  - a todo list experience.

### UI components added

- Added a custom navigation bar in `src/components/Nav.tsx`.
- Added a greeting component in `src/components/Greeting.tsx`.
- Added a todo UI component in `src/components/Todo.tsx`.
- Added custom styling for the navigation in `src/components/nav.css`.

## Server-Side Function Changes

### New server functions

- Added server functions in `src/actions/index.ts` for:
  - retrieving navigation time,
  - reading browser information from request headers,
  - fetching todos,
  - deleting todos with validation.
- Used TanStack Start server functions to make data available during SSR and from the client.

### Route loader integration

- The home route now uses a loader to fetch SSR data before rendering the page.
- This makes the page more dynamic than the basic scaffold example.

## Data Layer Changes

### Local database integration

- Added a LibSQL client in `src/db/client.ts`.
- Added schema initialization for a `todos` table in `src/db/schema.ts`.
- Added database helpers in `src/db/index.ts` for:
  - reading todos,
  - creating todos,
  - deleting todos,
  - updating todos,
  - searching for a single todo.

### Todo type definition

- Added a dedicated todo model in `src/types/todo.ts`.

### Seed data

- Added a seeder script in `src/db/seeder.ts` to populate the database with sample todo records.

## Project Infrastructure Changes

### Scripts and tooling

- Added custom npm scripts for database reset and CDN cache reset:
  - `db:reset`
  - `cdn:reset`
- Kept the scaffold’s standard build, test, lint, and format scripts while extending them for the new app workflow.

### Docker and proxy setup

- Added `docker-compose.yml` to run:
  - a delay proxy for simulating slower SSR responses,
  - an nginx-based CDN-style edge container.
- Added `delay-proxy.js` to forward requests with configurable latency.
- Added `nginx.conf` to serve static assets and route SSR traffic through the proxy.

## Dependency Changes

The project includes additional dependencies compared with the bare scaffold, including:

- `@libsql/client` for database access,
- `@picocss/pico` for UI styling,
- `ua-parser-js` for browser detection,
- `zod` for request validation,
- `nitro` and related SSR support packages for the custom server setup.

## Overall Result

Compared with the base scaffold, this project now functions as a small full-stack demo app with:

- server-rendered data loading,
- a persistent todo list,
- database-backed behavior,
- and additional local infrastructure for experimenting with SSR and CDN-style caching behavior.
