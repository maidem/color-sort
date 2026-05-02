# --- build stage ---
FROM node:20-alpine AS build
# Required for compiling better-sqlite3 (native addon)
RUN apk add --no-cache python3 make g++
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --include=dev --no-audit --no-fund

COPY . .
RUN npm run build

# --- runtime stage ---
FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY --from=build /app/.output ./.output

# Persistent volume for the SQLite database
RUN mkdir -p /data
VOLUME /data

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
