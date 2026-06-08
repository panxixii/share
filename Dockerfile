# ==========================================
# Phase 1: Build stage
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Only copy package configuration files to leverage Docker layer caching
COPY package*.json ./

# Install all development and runtime dependencies
RUN npm ci

# Copy the rest of the application files
COPY . .

# Run the build command (generates static SPA in dist/ and compiles server.ts to dist/server.cjs)
RUN npm run build

# ==========================================
# Phase 2: Production runtime stage
# ==========================================
FROM node:20-alpine AS runner

WORKDIR /usr/src/app

# Set production environment flags
ENV NODE_ENV=production
ENV PORT=3000

# Copy package files and install only production dependencies to keep the image compact
COPY package*.json ./
RUN npm ci --only=production

# Copy compiled files and assets from the build stage
COPY --from=builder /usr/src/app/dist ./dist

# Expose the internal listening port
EXPOSE 3000

# Boot the compiled Express server
CMD ["npm", "start"]
