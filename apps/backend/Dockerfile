# Stage 1: Install & build with Node (has node:sqlite)
FROM node:22-slim AS builder

WORKDIR /app

RUN npm install -g pnpm turbo

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY packages ./packages
COPY apps/backend ./apps/backend

RUN pnpm install --frozen-lockfile
RUN turbo build --filter=@m3trs/backend

# Stage 2: Run with Bun
FROM oven/bun:latest

WORKDIR /app

COPY --from=builder /app ./

WORKDIR /app/apps/backend

CMD ["bun", "run", "start"]