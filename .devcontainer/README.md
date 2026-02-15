# Dev Container Notes

This setup is intentionally minimal.

- Base image: Node 20 devcontainer image
- Workspace path: `/workspaces/Portfolio`
- Forwarded ports: `5173` (Vite dev), `4173` (Vite preview)
- On create: runs `cd MyPortfolio && npm ci`

Usage:

1. Rebuild and reopen in container.
2. Run `cd MyPortfolio && npm run dev -- --host 0.0.0.0 --port 5173 --strictPort`.
3. Open port `5173` from the VS Code Ports panel.
