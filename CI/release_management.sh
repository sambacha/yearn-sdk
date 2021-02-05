#!/bin/bash
node --version 
npm --version
echo $USER

npm install -g conventional-github-releaser
conventional-github-releaser -p angular

# this regenerates all possible releases 
# conventional-github-releaser -p angular -r 0

npm install -g semantic-release
npx semantic-release

# webhook from developer 
# curl -v -H "Accept: application/vnd.github.everest-preview+json" -H "Authorization: token ${GITHUB_TOKEN}" https://api.github.com/repos/[org-name-or-username]/[repository]/dispatches -d '{ "event_type": "semantic-release" }'
