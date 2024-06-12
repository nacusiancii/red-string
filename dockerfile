# Use an official Node.js runtime as the base image
FROM node:14.17.0 as build

LABEL maintainer="muralik <muralik2405@gmail.com>"
LABEL application="Red String"
LABEL version="1.0.0"

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci && npm cache clean --force

# Copy the entire project to the working directory
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight web server to serve the built files
FROM nginx:stable-alpine

# Copy the built files from the previous stage to the web server's directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port on which the web server will listen
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]