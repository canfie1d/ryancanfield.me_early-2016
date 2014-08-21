#!/bin/bash
host_pattern=^.*\..*$
protocol_pattern=\/\/
ssh_pattern=^.*@.*\..*:.*$

# Check for git
git --version > /dev/null 2>&1
GIT_INSTALLED=$?

[[ $GIT_INSTALLED -ne 0 ]] && { echo "Install git before executing this script."; exit 0; }

test_init=false
while getopts ":t" opt; do
  case $opt in
    t) test_init=true;;
    \?) echo "Invalid option: -$OPTARG" >&2; exit 1;;
  esac
done

# Get input for Git
if [[ $test_init == false ]]; then
  repo_url=""
  while [[ $repo_url == false ]] || [[ ! $repo_url =~ $ssh_pattern ]]; do
    if [[ $repo_url != "" ]]; then
      echo "Invalid Git SSH URL"
    fi
    read -p "Enter Git SSH URL: " repo_url
  done
fi

# Get input for configs
dev_api_host=""
while [[ ! $dev_api_host =~ $host_pattern ]] || [[ $dev_api_host =~ $protocol_pattern ]]; do
  read -p "Enter Dev API Host [api.project.vm]: " dev_api_host
done

production_api_host=""
while [[ ! $production_api_host =~ $host_pattern ]] || [[ $production_api_host =~ $protocol_pattern ]]; do
  read -p "Enter Production API Host [api.project.com]: " production_api_host
done

qa_app_name=""
while [[ $qa_app_name == "" ]]; do
  read -p "Enter QA App Name [project-name]: " qa_app_name
done

qa_host=""
while [[ ! $qa_host =~ $host_pattern ]] || [[ $qa_host =~ $protocol_pattern ]]; do
  read -p "Enter QA Host [domain only]: " qa_host
done

# Confirm settings are correct
echo -e "\n"
if [[ $test_init == false ]]; then
  echo -e "Git URL\t\t\t$repo_url"
fi

echo -e "Dev API Host\t\t$dev_api_host"
echo -e "Production API Host\t$production_api_host"
echo -e "QA App Name\t\t$qa_app_name"
echo -e "QA Host\t\t\t$qa_host"
echo -e "\n"

read -p "Are these settings correct? " confirm
if [[ $confirm =~ ^[yY] ]]; then

  if [[ $test_init == false ]]; then
    # Intialize new git repo
    set -e
    rm -rf .git
    git init

    git remote add origin $repo_url
    git checkout -b master
  fi

  echo "Updating config files"
  sed -i "" s/%DEV_API_HOST%/$dev_api_host/g "./application/config/config.development.js"
  sed -i "" s/%PRODUCTION_API_HOST%/$production_api_host/g "./application/config/config.production.js"
  sed -i "" s/%QA_APP_NAME%/$qa_app_name/g "./application/config/config.qa.js"
  sed -i "" s/%QA_HOST%/$qa_host/g "./application/config/config.qa.js"

  if [[ $test_init == false ]]; then
    rm initialize.sh
  fi
else
  echo "Initialization cancelled"
fi
