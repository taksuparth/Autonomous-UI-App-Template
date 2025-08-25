# Containerization with Docker

This project includes a multi-stage Dockerfile that is optimized for building a lightweight and secure production-ready container for the frontend application.

[Back to Main README](../README.md)

## How It Works

The Dockerfile uses a multi-stage build process:

1.  **Build Stage**: This stage uses a full Node.js image to install all dependencies and build the application.
2.  **Production Stage**: This stage uses a much smaller and more secure Nginx image. It copies only the static, built assets (HTML, CSS, JS) from the build stage into the Nginx server directory.

This process results in a small, efficient, and secure Docker image that is ready for deployment.

## How to Use

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) must be installed and running.

### Building the Image

To build the Docker image, run the following command from the root of the project:

`   docker build -t ui-admin-template .   `

- ui-admin-template is the name and tag for your new image. You can change this to whatever you like.

### Running the Container

Once the image is built, you can run it as a container:

`docker run -p 8080:80 ui-admin-template   `

- \-p 8080:80: This maps port 8080 on your local machine to port 80 inside the container (which is the default port for Nginx).

Your application will now be accessible in your browser at http://localhost:8080.
