# Use the official Node.js 19 image as base
FROM node:19

# Set working directory inside the container
WORKDIR /.

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Init Prisma
RUN npx prisma generate
RUN npx @snaplet/seed sync --config ./prisma/seed.config.ts

# Expose the port that the app runs on
EXPOSE 4200

# Start the express server
CMD ["npm", "run", "start"]