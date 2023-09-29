#!/usr/bin/env sh

rm -rf node_modules
npm ci

cd packages

for package in "core" "utilities" "cli" "test" "artifacts"
do
  (cd $package; ./build.sh)
done
