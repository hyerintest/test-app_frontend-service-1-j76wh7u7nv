#!/usr/bin/env bash

SRC_DIR=`dirname "$0"`
if [ "$SRC_DIR" != "." ]; then
  pushd "$SRC_DIR"
fi

TAG=$(date +'%Y%m%d-%H%M%S')

echo BUILD DOCKER IMAGE =======\> //frontend-service-1-j76wh7u7nv:$TAG

TAG_NAME=//frontend-service-1-j76wh7u7nv:$TAG
LATEST_TAG=//frontend-service-1-j76wh7u7nv:latest

echo $LATEST_TAG

docker build --rm -t $TAG_NAME . --build-arg PROFILE=default
docker login  -u  -p 
docker tag $TAG_NAME $LATEST_TAG
docker push $TAG_NAME
docker push $LATEST_TAG
docker rmi $(docker images --filter "dangling=true" -q --no-trunc)
docker logout $REPOSITORY

if [ "$SRC_DIR" != "." ]; then
  popd
fi
