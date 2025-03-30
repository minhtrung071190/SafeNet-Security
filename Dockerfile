FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine as production

# Set working directory
WORKDIR /app

# Copy package files and install production dependencies only
COPY package*.json ./
RUN npm ci --only=production

# Copy built assets from build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/shared ./shared
COPY --from=build /app/server ./server

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["node", "dist/server"]

# Test stage