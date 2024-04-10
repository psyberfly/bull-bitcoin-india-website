#!/bin/bash

docker build -t bb-india-website .
docker run -d -p 3000:3000 --name bb-india-website bb-india-website  