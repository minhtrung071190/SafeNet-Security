# Use Node.js 20 as the base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install all dependencies (dev dependencies needed for build AND runtime)
RUN npm ci

# Copy all project files
COPY . .

# Build the application
RUN npm run build

# Add an environment variable to indicate production
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 5000

# Start the application
CMD ["npm", "start"]