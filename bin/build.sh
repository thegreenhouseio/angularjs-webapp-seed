#!/usr/bin/env bash

echo "node version"
node -v
echo "npm version"
npm -v
echo "yarn version"
yarn --version

echo "install dependencies..."
rm -rf node_modules/ > /dev/null 2>&1
yarn install

# build
export NODE_ENV=production
yarn run test
yarn run build