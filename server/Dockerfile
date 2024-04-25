# Use the official Node.js 14 image as base
FROM node:14

# Set working directory inside the container
WORKDIR /.

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port that the app runs on
EXPOSE 4200

# Start the express server
CMD ["npm", "start"]