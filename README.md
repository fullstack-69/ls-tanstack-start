# Setup

- Edit `.env` file in the project root.
- `pnpm install`
- `pnpm run db:reset` - resets the database and seeds it with sample data.
- `pnpm run build`
- `pnpm run preview`
- `docker compose up -d` - starts CDN server for the app.
- `pnpm run cdn:reset` - resets the CDN cache for the app.

## Env Variables

```env
DB_LATENCY=1000
TURSO_DATABASE_URL=file:app.db
```

- `DB_LATENCY`: artificial DB delay in milliseconds for demo/testing behavior.
- `TURSO_DATABASE_URL`: database URL used by `src/db/client.ts`.
  - Use `file:app.db` for local development.
  - Use your Turso URL in remote environments.

If `TURSO_DATABASE_URL` is missing, the app falls back to `file:app.db`.
