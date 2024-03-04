# Use the official Node.js 20 image as the base image
FROM node:20.11.1

# Set the working directory inside the container
WORKDIR /usr/src/app

COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the code from your local directory to the container
COPY . .

# Build the application
RUN npm run build

# Expose the port on which the application will run (main was 8000, your should be different if you changed it in the code)
EXPOSE 8000

# Start the application
CMD ["npm", "start"]