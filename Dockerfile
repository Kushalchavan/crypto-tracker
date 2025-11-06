# Use official Node.js Image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# cpy the rest of the code
COPY . .

# Build the Next.js app
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

# Copy build files from builder state
COPY --from=builder /app ./ 

# expose port
EXPOSE 3000

# Run the app
CMD [ "npm", "start" ]