#!/bin/bash

# Define the container name in a variable for reuse
CONTAINER_NAME="bb-india-website"

# Check if the container is currently running
if [ "$(docker ps -q -f name=^/${CONTAINER_NAME}$)" ]; then
    echo "Container ${CONTAINER_NAME} is currently running. Stopping..."
    docker stop "${CONTAINER_NAME}"
    echo "Container ${CONTAINER_NAME} has been stopped."
fi

# Check if the container exists (stopped container)
if [ "$(docker ps -aq -f name=^/${CONTAINER_NAME}$)" ]; then
    echo "Removing existing container..."
    docker rm "${CONTAINER_NAME}"
    echo "Container ${CONTAINER_NAME} has been removed."
fi

echo "Building the Docker image..."
# Use the variable for the tag name in docker build
docker build -t "${CONTAINER_NAME}" .

echo "Running the Docker container..."
# Use the variable for the container name in docker run
docker run -d --env-file .env -p 3000:3000 --name "${CONTAINER_NAME}" "${CONTAINER_NAME}"

echo "Container ${CONTAINER_NAME} is up and running."
