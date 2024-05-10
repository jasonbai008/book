#!/bin/bash

npm run build
git add .
git commit -m 'release'
git push