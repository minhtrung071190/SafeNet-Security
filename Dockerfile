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
# Copy the public folder for static assets
COPY --from=build /app/public ./public
# Copy the attached_assets folder for the logo
COPY --from=build /app/attached_assets ./attached_assets

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["node", "dist/index.js"]
#