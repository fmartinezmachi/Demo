#!/usr/bin/env sh

##############################################################################
##
##  Container start up script for UN*X
##
##############################################################################

#If no exit the path container create a new one:
GITHUBREPOSITORY="https://github.com/globile-software/architecture.git"
BRANCH='master'

if [ ! -d "./containers" ]; then
  echo "./containers doesn't exist. Downloading new version from github"
  svn export ${GITHUBREPOSITORY}/branches/${BRANCH}/scripts/containersh/containers
  chmod +x ./containers/container.sh
  chmod +x ./containers/containervariables.env
fi

#Executing wrapper script
./containers/container.sh $@
